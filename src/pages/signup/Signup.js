import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import PageHeader from "../../components/PageHeader";

function SignUpPage() {
    const { handleSubmit,  register, formState: { errors } } = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('https://localhost:8443/register', data);
            console.log(result)
            history.push("/feedback/register")
            setTimeout(() => {
                history.push("/signin")
            }, 1500)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <PageHeader title="AANMELDEN"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hieronder uw gegevens in om U aan te melden om puzzels te kunnen gaan ruilen.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="username-field">
                                Gebruikersnaam:
                                <input
                                    type="text"
                                    id="username-field"
                                    name="username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Voer een gebruikersnaam in"
                                        }
                                    })}
                                />
                                {errors.username && <span>{errors.username.message}</span>}
                            </label>
                            <label htmlFor="password-field">
                                Wachtwoord:
                                <input
                                    type="password"
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
                                {errors.password && <span>{errors.password.message}</span>}
                            </label>
                            <label htmlFor="email-field">
                                Email:
                                <input
                                    type="email"
                                    id="email-field"
                                    name="email"
                                    {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Voer een geldig emailadres in"
                                            }
                                        }
                                    )}
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </label>
                            <label htmlFor="firstname-field">
                                Voornaam:
                                <input
                                    type="text"
                                    id="firstname-field"
                                    name="firstname"
                                    {...register("firstname")}
                                />
                            </label>
                            <label htmlFor="lastname-field">
                                Achternaam:
                                <input
                                    type="text"
                                    id="lastname-field"
                                    name="lastname"
                                    {...register("lastname")}
                                />
                            </label>
                            <button type="submit" className="uploadButton">REGISTREER</button>
                        </form>
                    </div>
                    <p>Heeft U al een account? Klik dan <Link to="/signin" className="link">HIER</Link> om in te loggen.</p>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;