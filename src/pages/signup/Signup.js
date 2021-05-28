import React, {useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import PageHeader from "../../components/headers/PageHeader";

function SignUpPage() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [errorMessage, setErrorMessage] = useState();
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
            setErrorMessage(e.response.data.message);
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
                                Gebruikersnaam<br/>
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
                                                message: "Voer een geldig wachtwoord in"
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                message: "Het wachtwoord moet uit minimaal 8 tekens bestaan en minimaal 1 letter, 1 cijfer en 1 teken bevatten!"
                                            }
                                        }
                                    )}
                                />
                            </label>
                            {errors.password && <span className="errorMessage">{errors.password.message}</span>}
                            <label htmlFor="email-field">
                                Email<br/>
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
                            </label>
                            {errors.email && <span className="errorMessage">{errors.email.message}</span>}
                            <label htmlFor="firstname-field">
                                Voornaam<br/>
                                <input
                                    type="text"
                                    className="inputField"
                                    id="firstname-field"
                                    name="firstname"
                                    {...register("firstname")}
                                />
                            </label>
                            <label htmlFor="lastname-field">
                                Achternaam<br/>
                                <input
                                    type="text"
                                    className="inputField"
                                    id="lastname-field"
                                    name="lastname"
                                    {...register("lastname")}
                                />
                            </label>
                            <button type="submit" className="regularButton">REGISTREER</button>
                        </form>
                        {errorMessage && <span className="errorMessage">{errorMessage}</span>}
                    </div>
                    <p>Heeft U al een account? Klik dan <Link to="/signin" className="link">HIER</Link> om in te loggen.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;