import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import React, {useContext} from "react";

function UpdateAddress() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const {user: {username}} = useContext(AuthContext);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.put(`https://localhost:8443/${username}/address`, data);
            console.log(result);
            history.push("/feedback/update");
            setTimeout(() => {
                history.push("/account")
            },1500);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <PageHeader title="adres aanpassen"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hieronder uw aangepaste adresgegevens in. Deze worden alleen
                        getoond aan een andere gebruiker wanneer U een ruilovereenkomst met de betreffende gebruiker
                        hebt gesloten.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="streetName-field">
                                Straatnaam:
                            </label>
                            <input
                                type="text"
                                className="inputField"
                                id="streetName-field"
                                name="streetName"
                                {...register("streetName", {
                                    required: {
                                        value: true,
                                        message: "Voer een straatnaam in"
                                    },
                                    pattern: {
                                        value: /[a-zA-Z]/,
                                        message: "De straatnaam mag alleen letters bevatten, geen cijfers of leestekens"
                                    }
                                })}
                            />
                            {errors.streetName && <span className="errorMessage">{errors.streetName.message}</span>}
                            <label htmlFor="houseNumber-field">
                                Huisnummer en toevoegingen:
                            </label>
                            <input
                                type="text"
                                className="inputField"
                                id="houseNumber-field"
                                name="houseNumber"
                                {...register("houseNumber", {
                                        required: {
                                            value: true,
                                            message: "Voer een huisnummer in"
                                        }
                                    }
                                )}
                            />
                            {errors.houseNumber && <span className="errorMessage">{errors.houseNumber.message}</span>}
                            <label htmlFor="postalCode-field">
                                Postcode:
                            </label>
                            <input
                                type="text"
                                className="inputField"
                                id="postalCode-field"
                                name="postalCode"
                                {...register("postalCode", {
                                        required: {
                                            value: true,
                                            message: "Voer een postcode in"
                                        },
                                        maxLength: {
                                            value: 6,
                                            message: "De postcode moet uit 4 cijfers en 2 letters bestaan zonder spatie"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "De postcode moet uit 4 cijfers en 2 letters bestaan zonder spatie"
                                        }
                                    }
                                )}
                            />
                            {errors.postalCode && <span className="errorMessage">{errors.postalCode.message}</span>}
                            <label htmlFor="city-field">
                                Woonplaats:
                            </label>
                            <input
                                type="text"
                                className="inputField"
                                id="city-field"
                                name="city"
                                {...register("city", {
                                        required: {
                                            value: true,
                                            message: "Voer een stad in"
                                        },
                                        pattern: {
                                            value: /[a-zA-Z]/,
                                            message: "De stadsnaam mag alleen letters bevatten, geen cijfers of leestekens"
                                        }
                                    }
                                )}
                            />
                            {errors.city && <span className="errorMessage">{errors.city.message}</span>}
                            <label htmlFor="country-field">
                                Land:
                            </label>
                            <input
                                type="text"
                                className="inputField"
                                id="country-field"
                                name="country"
                                {...register("country", {
                                        required: {
                                            value: true,
                                            message: "Voer een land in"
                                        },
                                        pattern: {
                                            value: /[a-zA-Z]/,
                                            message: "Het land mag alleen letters bevatten, geen cijfers of leestekens"
                                        }
                                    }
                                )}
                            />
                            {errors.country && <span className="errorMessage">{errors.country.message}</span>}
                            <button type="submit" className="regularButton">aanpassen</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAddress;