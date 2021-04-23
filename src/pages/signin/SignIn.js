
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {useContext} from "react";
import PageHeader from "../../components/PageHeader";
import {Link} from "react-router-dom";
/*import { AuthContext } from "../../context/AuthContext";*/

function SignInPage() {
/*    const { login } = useContext(AuthContext);*/
    const { handleSubmit, register } = useForm();

    async function onSubmit(data) {
        /*console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/login', data);

            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
        }*/
    }

    return (
        <>
            <PageHeader title="INLOGGEN"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hier onder uw emailadres en wachtwoord in om U aan te melden.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email-field">
                                Emailadres:
                                <input
                                    type="email"
                                    id="email-field"
                                    name="email"
                                    ref={register("email", {
                                            required: {
                                                value: true,
                                                message: "Je moet een geldig mailadres opgeven"
                                            }
                                        }
                                    )}
                                />
                            </label>
                            <label htmlFor="password-field">
                                Wachtwoord:
                                <input
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    ref={register("password", {
                                            required: {
                                                value: true,
                                                message: "Je moet je wachtwoord invullen"
                                            }
                                        }
                                    )}
                                />
                            </label>
                            <button type="submit" className="uploadButton">LOG IN</button>
                        </form>
                    </div>
                    <p>Heeft U nog geen account? Klik dan <Link to="/signup" classname="link">HIER</Link> om U aan te melden.</p>
                </div>
            </div>
        </>

    )
}

export default SignInPage;