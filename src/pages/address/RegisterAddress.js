import {useForm} from "react-hook-form";
import axios from "axios";
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import PageHeader from "../../components/PageHeader";


function RegisterAddress() {

    const jwtToken = localStorage.getItem('token');
    const {handleSubmit, register, formState: {errors}} = useForm();
    const {user, user: {username}, updateUser} = useContext(AuthContext);

    async function onSubmit(data) {
        console.log(data);
        if (user.address) {
            try {
                const result = await axios.put(`https://localhost:8443/users/${username}/address`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                console.log(result);
                updateUser();
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                const result = await axios.post(`https://localhost:8443/users/${username}/address`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                console.log(result);
                updateUser();
            } catch (e) {
                console.error(e);
            }
        }
    }

    function includeID() {
        if (user.address) {
            return (
                <input
                    type="hidden"
                    id="address-id"
                    name="id"
                    value={user.address.id}
                    {...register("id")}
                />
            )
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
                            {includeID()}
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
                                        pattern: {
                                            value: /[1-9][0-9]{3}([A-RT-Z][A-Z]|[S][BCE-RT-Z])/,
                                            message: "Voer een geldige postcode in: 2222AA"
                                        },
                                        maxLength: {
                                            value: 8,
                                            message: "Een postcode bestaat uit 4 cijfers en 2 letters"
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
                                            value: /[a-zA-Z][^0-9]/,
                                            message: "Het land mag alleen letters bevatten, geen cijfers of leestekens"
                                        }
                                    }
                                )}
                            />
                            {errors.country && <span className="errorMessage">{errors.country.message}</span>}
                            <button type="submit" className="regularButton">REGISTREER</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterAddress;