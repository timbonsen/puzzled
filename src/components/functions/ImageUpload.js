import { useContext, useState } from 'react';
import FileUploadService from '../../service/FileUploadService';
import { ImageUploadContext } from '../../context/ImageUploadContext';

function ImageUpload() {
  const { registerId, deleteId } = useContext(ImageUploadContext);

  const [image, setImage] = useState({
    currentFile: undefined,
    previewImage: undefined,
    message: '',
  });

  function selectFile(event) {
    setImage({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      message: '',
    });
  }

  function upload() {
    deleteId();
    const response = FileUploadService(image.currentFile);
    response.then((value) => {
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
      <div className="imageUploadContainer">
        <div className="fileInput">
          <h3>afbeelding</h3>
          <label className="regularButton">
            kies afbeelding
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </div>
        {image.previewImage && (
        <div className="imageUploadContainer">
          <span className="normalMessage">{image.currentFile.name}</span>
          <img className="previewImage" src={image.previewImage} alt="" />
        </div>
        )}
        <div className="uploadButtonContainer">
          <button
            type="button"
            className="regularButton"
            disabled={!image.currentFile}
            onClick={upload}
          >
            Afbeelding toevoegen
          </button>
          {image.message && <span className="errorMessage">{image.message}</span>}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
