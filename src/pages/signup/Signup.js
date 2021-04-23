import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import PageHeader from "../../components/PageHeader";

function SignUpPage() {
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        /*try {
            const result = await axios.post('http://localhost:3000/register', data);
            console.log(result)
        } catch (e) {
            console.error(e);
        }*/
    }

    return (
        <>
            <PageHeader title="AANMELDEN"/>
            <div className="pageContainer">
                <p>Vul hieronder uw gegevens in om U aan te melden om puzzels te kunnen gaan ruilen.</p>
                <div>
                    <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username-field">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="username-field"
                                name="username"
                                {...register("username")}
                            />
                        </label>
                        <label htmlFor="email-field">
                            Email:
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
                        <button type="submit" className="uploadButton">REGISTREER</button>
                    </form>
                </div>
                <p>Heeft U al een account? Klik dan <Link to="/signin" classname="link">HIER</Link> om in te loggen.</p>
            </div>
        </>
    )
}

export default SignUpPage;