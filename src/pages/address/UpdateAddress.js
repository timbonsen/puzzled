import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import {useContext} from "react";

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
                            <button type="submit" className="regularButton">aanpassen</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAddress;