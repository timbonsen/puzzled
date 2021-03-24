import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../components/PageHeader";

function UploadPage() {
    const { handleSubmit, errors, register } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <PageHeader title="UPLOAD" />
            <div className="pageContainer">
                <div className="formContainer">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <label htmlFor="puzzle-title">
                            Titel:
                            <input
                                type="text"
                                name="title"
                                id="puzzle-title"
                                ref={register({
                                        required: {
                                            value: true,
                                            message: 'Er moet een titel voor de puzzel meegegeven worden.'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'De titel mag uit maximaal 30 karakters bestaan.'
                                        }
                                    }
                                )}/>
                            {errors.title &&
                            <h3>{errors.title.message}</h3>}
                        </label>
                        <label htmlFor="puzzle-brand">
                            Merk:
                            <select
                                name="brand"
                                id="puzzle-brand"
                                ref={register}
                            >
                                <option value="king">King</option>
                                <option value="ravensburger">Ravensburger</option>
                                <option value="jumbo">Jumbo</option>
                                <option value="falcon">Falcon</option>
                                <option value="goliath">Goliath</option>
                                <option value="castorland">Castorland</option>
                                <option value="Clementoni">Clementoni</option>
                            </select>
                        </label>
                        <label htmlFor="number-of-pieces">
                            Aantal puzzelstukjes:
                            <select
                                name="pieces"
                                id="number-of-pieces"
                                ref={register}
                                >
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="250">250</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="1500">1500</option>
                                <option value="2000+">2000+</option>
                                <option value="overig">Overig</option>
                            </select>
                        </label>
                        <label htmlFor="puzzle-height">
                            Hoogte in centimeters:
                            <input
                                type="number"
                                name="puzzle-height"
                                id="puzzle-height"
                                ref={register}/>
                        </label>
                        <label htmlFor="puzzle-width">
                            Breedte in centimeters:
                            <input
                                type="number"
                                name="puzzle-width"
                                id="puzzle-width"
                                ref={register}/>
                        </label>
                        <label htmlFor="eanCode">
                            EAN Code:
                            <input
                                type="number"
                                name="eanCode"
                                id="eanCode"
                                ref={register({
                                        required: {
                                            value: true,
                                            message: 'De EAN code moet meegegeven worden. Dit zijn de 13 cijfers onder de streepjescode.'
                                        },
                                        minLength: {
                                            value: 13,
                                            message: 'De EAN code bestaat uit 13 cijfers.'
                                        },
                                        maxLength: {
                                            value: 13,
                                            message: 'De EAN code bestaat uit 13 cijfers.'
                                        }
                                    }
                                )}/>
                            {errors.eanCode &&
                            <h3>{errors.eanCode.message}</h3>}
                        </label>

                        <button className="submitButton" type="submit">
                            Uploaden
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadPage;