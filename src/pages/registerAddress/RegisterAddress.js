import {useForm} from "react-hook-form";
import axios from "axios";
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import PageHeader from "../../components/PageHeader";


function RegisterAddress() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const {user: {username}} = useContext(AuthContext);

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post(`https://localhost:8443/${username}/address`, data);
            console.log(result)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <PageHeader title="ADRES REGISTREREN"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>Vul hieronder uw adresgegevens in om deze toe te voegen aan Uw account. Deze worden alleen
                        getoond aan een andere gebruiker wanneer U een ruilovereenkomst met de betreffende gebruiker
                        hebt gesloten.</p>
                    <div>
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="streetName-field">
                                Straatnaam:
                                <input
                                    type="text"
                                    id="streetName-field"
                                    name="streetName"
                                    {...register("streetName", {
                                        required: {
                                            value: true,
                                            message: "Voer een straatnaam in"
                                        }
                                    })}
                                />
                                {errors.streetName && <span>{errors.streetName.message}</span>}
                            </label>
                            <label htmlFor="houseNumber-field">
                                Huisnummer:
                                <input
                                    type="text"
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
                                {errors.houseNumber && <span>{errors.houseNumber.message}</span>}
                            </label>
                            <label htmlFor="postalCode-field">
                                Postcode:
                                <input
                                    type="text"
                                    id="postalCode-field"
                                    name="postalCode"
                                    {...register("postalCode", {
                                            required: {
                                                value: true,
                                                message: "Voer een postcode in"
                                            }
                                        }
                                    )}
                                />
                                {errors.postalCode && <span>{errors.postalCode.message}</span>}
                            </label>
                            <label htmlFor="city-field">
                                Woonplaats:
                                <input
                                    type="text"
                                    id="city-field"
                                    name="city"
                                    {...register("city", {
                                            required: {
                                                value: true,
                                                message: "Voer een stad in"
                                            }
                                        }
                                    )}
                                />
                                {errors.city && <span>{errors.city.message}</span>}
                            </label>
                            <label htmlFor="country-field">
                                Land:
                                <input
                                    type="text"
                                    id="country-field"
                                    name="country"
                                    {...register("country", {
                                            required: {
                                                value: true,
                                                message: "Voer een land in"
                                            }
                                        }
                                    )}
                                />
                                {errors.country && <span>{errors.country.message}</span>}
                            </label>
                            <button type="submit" className="regularButton">REGISTREER</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterAddress;