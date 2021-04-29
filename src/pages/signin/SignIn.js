
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {useContext} from "react";
import PageHeader from "../../components/PageHeader";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SignInPage() {
    const { login } = useContext(AuthContext);
    const { handleSubmit, register, errors } = useForm();

    async function onSubmit(data) {
        console.log(data);
        /*try {
            const result = await axios.post('https://localhost:8443/authenticate', data);

            login(result.data.jwt);

        } catch (e) {
            console.error(e);
        }*/
    }

    return (
        <>
            <PageHeader title="INLOGGEN"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hier onder uw username en wachtwoord in om U aan te melden.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="username-field">
                                Username:
                                <input
                                    type="text"
                                    id="username-field"
                                    name="username"
                                    {...register("username")}
                                />
                                {errors.username && <span>{errors.username.message}</span>}
                            </label>
                            <label htmlFor="password-field">
                                Wachtwoord:
                                <input
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    {...register("password")}
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </label>
                            <button type="submit" value="Submit" className="uploadButton">LOG IN</button>
                        </form>
                    </div>
                    <p>Heeft U nog geen account? Klik dan <Link to="/signup" className="link">HIER</Link> om U aan te melden.</p>
                </div>
            </div>
        </>

    )
}

export default SignInPage;