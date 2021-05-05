import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/PageHeader";
import LoginHeader from "../../components/LoginHeader";

function UploadPage() {
    const { handleSubmit, formState: { errors }, register } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <PageHeader title="UPLOAD" />
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader />
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="splitFormContainer">
                            <div className="uploadFormLeft">
                                <label htmlFor="puzzle-title">TITEL</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="uploadInput"
                                    id="puzzle-title"
                                    {...register("title",{
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
                                <label htmlFor="puzzleBrand">MERK</label>
                                <select
                                    name="puzzleBrand"
                                    className="uploadInput"
                                    id="puzzleBrand"
                                    {...register("puzzleBrand")}
                                >
                                    <option value="king">King</option>
                                    <option value="ravensburger">Ravensburger</option>
                                    <option value="jumbo">Jumbo</option>
                                    <option value="falcon">Falcon</option>
                                    <option value="goliath">Goliath</option>
                                    <option value="castorland">Castorland</option>
                                    <option value="Clementoni">Clementoni</option>
                                </select>
                                <label htmlFor="numberOfPieces">AANTAL PUZZELSTUKJES</label>
                                <select
                                    name="numberOfPieces"
                                    className="uploadInput"
                                    id="numberOfPieces"
                                    {...register("numberOfPieces")}
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
                                <label htmlFor="puzzleHeight">HOOGTE IN CENTIMETERS</label>
                                <input
                                    type="number"
                                    name="puzzleHeight"
                                    className="uploadInput"
                                    id="puzzleHeight"
                                    {...register("puzzleHeight")}/>
                                <label htmlFor="puzzleWidth">BREEDTE IN CENTIMETERS</label>
                                <input
                                    type="number"
                                    name="puzzleWidth"
                                    className="uploadInput"
                                    id="puzzleWidth"
                                    {...register("puzzleWidth")}/>
                                <label htmlFor="eanCode">EAN CODE (BARCODE)</label>
                                <input
                                    type="number"
                                    name="eanCode"
                                    className="uploadInput"
                                    id="eanCode"
                                    {...register("eanCode",{
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
                            </div>
                            <div className="uploadFormRight">
                                <label htmlFor="puzzle-image">AFBEELDING</label>
                                <input
                                    type="file"
                                    multiple="false"
                                    className="imageUpload"
                                    name="img"
                                    accept="image/*"
                                    {...register("img")}/>
                                <label htmlFor="tag">CATEGORIE</label>
                                <select
                                    name="tag1"
                                    className="uploadInput"
                                    id="tag1"
                                    {...register("tag1")}
                                >
                                    <option value="nature">Natuur</option>
                                    <option value="jvhaasteren">Jan Van Haasteren</option>
                                    <option value="wasgij">Wasgij</option>
                                    <option value="disney">Disney</option>
                                    <option value="dieren">Dieren</option>
                                    <option value="stilleven">Stilleven</option>
                                    <option value="foto">Foto</option>
                                    <option value="3d">3D</option>
                                </select>
                                <label htmlFor="puzzle-activated">ACTIVEER</label>
                                <input
                                    type="checkbox"
                                    name="activated"
                                    {...register("activated")}/>
                                <button className="uploadButton" type="submit">
                                    Uploaden
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadPage;