import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import PageHeader from "../../components/PageHeader";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import ImageUpload from "../../components/functions/ImageUpload";
import https from "../../http-common";
import {ImageUploadContext} from "../../context/ImageUploadContext";

function UploadPage() {

    const {handleSubmit, formState: {errors}, register} = useForm();
    const {user: {username}} = useContext(AuthContext);
    const {imageId} = useContext(ImageUploadContext);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data.imageId);
        data.imageId = imageId;
        console.log(data);
        const json = JSON.stringify(data);
        console.log(json);
        try {
            const result = await https.post(`/users/${username}/upload`, json);
            console.log(result)
            if (result.status === 201) {
                history.push("/feedback/puzzle-upload");
                setTimeout(() => history.push("/account"), 1500);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <PageHeader title="puzzel uploaden"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <div className="splitFormContainer">
                        <form className="uploadFormLeft" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="puzzle-title">titel</label>
                            <input
                                type="text"
                                name="title"
                                className="inputField"
                                id="puzzle-title"
                                {...register("title", {
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
                            {errors.title && <span className="errorMessage">{errors.title.message}</span>}
                            <label htmlFor="puzzleBrand">merk</label>
                            <select
                                name="puzzleBrand"
                                className="inputField"
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
                            <label htmlFor="numberOfPieces">aantal puzzelstukjes</label>
                            <select
                                name="numberOfPieces"
                                className="inputField"
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
                                <option value="2000+">2000</option>
                                <option value="overig">Overig</option>
                            </select>
                            <label htmlFor="puzzleHeight">hoogte in centimeters</label>
                            <input
                                type="number"
                                name="puzzleHeight"
                                className="inputField"
                                id="puzzleHeight"
                                {...register("puzzleHeight")}/>
                            <label htmlFor="puzzleWidth">breedte in centimeters</label>
                            <input
                                type="number"
                                name="puzzleWidth"
                                className="inputField"
                                id="puzzleWidth"
                                {...register("puzzleWidth")}/>
                            <label htmlFor="eanCode">ean code (barcode)</label>
                            <input
                                type="number"
                                name="eanCode"
                                className="inputField"
                                id="eanCode"
                                {...register("eanCode", {
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
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'De EAN code bestaat alleen uit cijfers'
                                        }
                                    }
                                )}/>
                            {errors.eanCode &&
                            <span className="errorMessage">{errors.eanCode.message}</span>}
                            <label htmlFor="tag">categorieën</label>
                            <select
                                name="tag1"
                                className="inputField"
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
                            <label htmlFor="puzzle-activated">activeren voor ruilen</label>
                            <input
                                type="checkbox"
                                name="activated"
                                {...register("activated")}/>
                            <label htmlFor="puzzle-image">afbeelding
                                <ImageUpload/>
                            </label>
                            <input type="hidden"
                                   name="imageId"
                            />
                            <button className="regularButton" type="submit">
                                Uploaden
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPage;
