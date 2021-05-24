import React from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import PageHeader from "../../components/PageHeader";

function SignUpPage() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        data.username = data.username.toLowerCase();
        data.email = data.email.toLowerCase();
        data.firstname =  data.firstname.toLowerCase();
        data.lastname = data.lastname.toLowerCase();
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
                                    className="inputField"
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
                                    className="inputField"
                                    id="password-field"
                                    name="password"
                                    {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Voer een wachtwoord in"
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                message: "Het wachtwoord moet uit minimaal 8 tekens bestaan en minimaal 1 letter, 1 cijfer en 1 teken bevatten!"
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
                                    className="inputField"
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
                                    className="inputField"
                                    id="firstname-field"
                                    name="firstname"
                                    {...register("firstname")}
                                />
                            </label>
                            <label htmlFor="lastname-field">
                                Achternaam:
                                <input
                                    type="text"
                                    className="inputField"
                                    id="lastname-field"
                                    name="lastname"
                                    {...register("lastname")}
                                />
                            </label>
                            <button type="submit" className="uploadButton">REGISTREER</button>
                        </form>
                    </div>
                    <p>Heeft U al een account? Klik dan <Link to="/signin" className="link">HIER</Link> om in te loggen.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;