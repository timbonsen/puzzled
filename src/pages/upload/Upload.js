import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/headers/PageHeader';
import { AuthContext } from '../../context/AuthContext';
import ImageUpload from '../../components/functions/ImageUpload';
import https from '../../http-common';
import { ImageUploadContext } from '../../context/ImageUploadContext';
import DataListBrands from '../../components/datalists/DataListBrands';
import DataListNumberOfPieces from '../../components/datalists/DataListNumberOfPieces';
import DataListTags from '../../components/datalists/DataListTags';
import './Upload.css';

function UploadPage() {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const { user: { username } } = useContext(AuthContext);
  const { imageId, deleteId } = useContext(ImageUploadContext);
  const history = useHistory();

  async function onSubmit(data) {
    data.title = data.title.toLowerCase();
    data.puzzleBrand = data.puzzleBrand.toLowerCase();
    data.tag1 = data.tag1.toLowerCase();
    data.imageId = imageId;
    const json = JSON.stringify(data);
    try {
      const result = await https.post(`/users/${username}/upload`, json);
      if (result.status === 201) {
        history.push('/feedback/puzzle-upload');
        deleteId();
        setTimeout(() => history.push('/account'), 1500);
      }
    } catch (e) {
      console.error(e);
    }
  }

  function disableSubmitButton() {
    return !imageId;
  }

  useEffect(disableSubmitButton, [imageId]);

  return (
    <>
      <PageHeader title="puzzel uploaden" />
      <div className="pageContainer">
        <div className="pageContent">

          <form className="uploadForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="splitFormContainer">
              <div className="uploadFormLeft">
                <label htmlFor="puzzle-title">titel</label>
                <input
                  type="text"
                  name="title"
                  className="inputField"
                  id="puzzle-title"
                  {...register('title', {
                    required: {
                      value: true,
                      message: 'Er moet een titel voor de puzzel meegegeven worden.',
                    },
                    maxLength: {
                      value: 30,
                      message: 'De titel mag uit maximaal 30 karakters bestaan.',
                    },
                  })}
                />
                <label htmlFor="puzzleBrand">merk</label>
                <input
                  type="text"
                  list="brands"
                  name="puzzleBrand"
                  className="inputField"
                  id="puzzleBrand"
                  {...register('puzzleBrand', {
                    required: {
                      value: true,
                      message: 'Er moet een merk voor de puzzel meegegeven worden.',
                    },
                  })}
                />
                <DataListBrands />
                <label htmlFor="numberOfPieces">aantal puzzelstukjes</label>
                <input
                  type="number"
                  list="pieces"
                  name="numberOfPieces"
                  className="inputField"
                  id="numberOfPieces"
                  {...register('numberOfPieces', {
                    required: {
                      value: true,
                      message: 'Het aantal puzzelstukjes moet worden opgegeven.',
                    },
                    min: {
                      value: 1,
                      message: 'En puzzel kan niet minder dan 1 stukjes bevatten.',
                    },
                    maxLength: {
                      value: 6,
                      message: 'Het getal mag uit maximaal 6 cijfers bestaan.',
                    },
                  })}
                />
                <DataListNumberOfPieces />
                <label htmlFor="eanCode">ean code (barcode)</label>
                <input
                  type="number"
                  name="eanCode"
                  className="inputField"
                  id="eanCode"
                  {...register('eanCode', {
                    required: {
                      value: true,
                      message: 'De EAN code moet meegegeven worden. Dit zijn de 13 cijfers onder de streepjescode.',
                    },
                    minLength: {
                      value: 13,
                      message: 'De EAN code bestaat uit 13 cijfers.',
                    },
                    maxLength: {
                      value: 13,
                      message: 'De EAN code bestaat uit 13 cijfers.',
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: 'De EAN code bestaat alleen uit cijfers',
                    },
                  })}
                />
              </div>
              <div className="uploadFormMiddle">
                <label htmlFor="puzzleHeight">hoogte in centimeters</label>
                <input
                  type="number"
                  name="puzzleHeight"
                  className="inputField"
                  id="puzzleHeight"
                  {...register('puzzleHeight', {
                    required: {
                      value: true,
                      message: 'De hoogte van een puzzel moet worden meegegeven',
                    },
                    min: {
                      value: 0,
                      message: 'De afmeting kan geen negatieve waarde zijn',
                    },
                    maxLength: {
                      value: 3,
                      message: 'Het getal mag uit maximaal 3 cijfers bestaan',
                    },
                  })}
                />
                <label htmlFor="puzzleWidth">breedte in centimeters</label>
                <input
                  type="number"
                  name="puzzleWidth"
                  className="inputField"
                  id="puzzleWidth"
                  {...register('puzzleWidth', {
                    required: {
                      value: true,
                      message: 'De breedte van een puzzel moet worden weergegeven',
                    },
                    min: {
                      value: 0,
                      message: 'De afmeting kan geen negatieve waarde zijn',
                    },
                    maxLength: {
                      value: 3,
                      message: 'Het getal mag uit maximaal 3 cijfers bestaan',
                    },
                  })}
                />
                <label htmlFor="tag">categorie??n</label>
                <input
                  type="text"
                  list="tags"
                  name="tag1"
                  className="inputField"
                  id="tag1"
                  {...register('tag1')}
                />
                <DataListTags />
                <label htmlFor="puzzle-activated">activeren voor ruilen</label>
                <input
                  type="checkbox"
                  name="activated"
                  {...register('activated')}
                />
              </div>
              <div className="uploadFormRight">
                <div className="puzzleImageContainer">
                  <label htmlFor="puzzle-image">
                    <ImageUpload />
                  </label>
                  <input
                    type="hidden"
                    name="imageId"
                  />
                </div>
              </div>
            </div>
            {errors.title && <span className="errorMessage">{errors.title.message}</span>}
            {errors.eanCode
                        && <span className="errorMessage">{errors.eanCode.message}</span>}
            {errors.puzzleHeight
                        && <span className="errorMessage">{errors.puzzleHeight.message}</span>}
            {errors.puzzleWidth
                        && <span className="errorMessage">{errors.puzzleWidth.message}</span>}
            <span className="normalMessage">Voeg een afbeelding toe om de puzzel te kunnen uploaden.</span>
            <div className="buttonBar">
              <button className="regularButton" type="submit" disabled={disableSubmitButton()}>
                Uploaden
              </button>
              <button className="regularButton" type="button" onClick={history.goBack}>annuleer</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
