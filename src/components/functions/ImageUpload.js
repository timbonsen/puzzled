import FileUploadService from "../../service/FileUploadService";
import {useContext, useState} from "react";
import {ImageUploadContext} from "../../context/ImageUploadContext";

function ImageUpload() {

    const { registerId, deleteId } = useContext(ImageUploadContext);

    const [image, setImage] = useState({
        currentFile: undefined,
        previewImage: undefined,
        message: "",
    });

    function selectFile(event) {
        setImage({
            currentFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0]),
            message: ""
        });
    }

    function upload() {
        deleteId();
        const response = FileUploadService(image.currentFile);
        response.then((value) => {
            console.log(value.data.id);
            registerId(value.data.id);
            setImage({
                currentFile: image.currentFile,
                previewImage: image.previewImage,
                message: value.data.message,
            });
        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <label className="btn btn-default p-0">
                        <input type="file" accept="image/*" onChange={selectFile}/>
                    </label>
                </div>
                <div className="col-4">
                    <button
                        type="button"
                        className="regularButton"
                        disabled={!image.currentFile}
                        onClick={upload}
                    >
                        Afbeelding toevoegen
                    </button>
                </div>
            </div>

            {image.previewImage && (
                <div>
                    <img className="previewImage" src={image.previewImage} alt=""/>
                </div>
            )}

            {image.message && (
                <div className="errorMessage" role="alert">
                    {image.message}
                </div>
            )}
        </div>
    );
}


export default ImageUpload;