import React, {useEffect, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import PageHeader from "../../components/headers/PageHeader";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SignInPage() {
    const { login } = useContext(AuthContext);
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [errormessage, setErrorMessage] = useState(null);
    const [jwt, setJwt] = useState(null);

    async function onSubmit(data) {
        data.username = data.username.toLowerCase();
        setErrorMessage(null)
        try {
            const result = await axios.post('https://localhost:8443/authenticate', data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://localhost:8443/*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "*",
                }
            });
            console.log(result.data.jwt);
            setJwt(result.data.jwt);
        } catch (e) {
            console.error(e);
            setErrorMessage(e.response.data.message);
        }
    }

    useEffect(() => {
        if (jwt != null) {
            login(jwt);
        }
    }, [jwt]);

    return (
        <>
            <PageHeader title="INLOGGEN"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hier onder uw username en wachtwoord in om U aan te melden.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="username-field">
                                Gebruikersnaam<br/>
                                <input
                                    type="text"
                                    className="inputField"
                                    id="username-field"
                                    name="username"
                                    {...register("username", {
                                            required: {
                                                value: true,
                                                message: "Voer een geldige gebruikersnaam in"
                                            }
                                        }
                                    )}
                                />
                            </label>
                            {errors.username && <span className="errorMessage">{errors.username.message}</span>}
                            <label htmlFor="password-field">
                                Wachtwoord<br/>
                                <input
                                    type="password"
                                    className="inputField"
                                    id="password-field"
                                    name="password"
                                    {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Voer een wachtwoord in"
                                            }
                                        }
                                    )}
                                />
                            </label>
                            {errors.password && <span className="errorMessage">{errors.password.message}</span>}
                            <button type="submit" value="Submit" className="regularButton">LOG IN</button>
                        </form>
                        {errormessage && <span className="errorMessage">{errormessage}</span> }
                    </div>
                    <p>Heeft U nog geen account? Klik dan <Link to="/signup" className="link">HIER</Link> om U aan te
                        melden.</p>
                </div>
            </div>
        </>

    );
}

export default SignInPage;