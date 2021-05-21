import {createContext, useEffect, useState} from "react";

export const ImageUploadContext = createContext({});

function ImageUploadContextProvider({children}) {
    const [imageId, setImageId] = useState(null)

    function registerImageId(registeredId) {
        /*console.log(registeredId);*/
        setImageId(registeredId);
        /*console.log(imageId);*/
    }

    useEffect(() => {
        /*console.log(imageId)*/
    },[imageId]);

    function deleteImageId() {
        setImageId(null);
    }

    const data = {
    imageId: imageId,
        registerId: registerImageId,
        deleteId: deleteImageId,

    }

    return (
        <ImageUploadContext.Provider value={data}>
            { children }
        </ImageUploadContext.Provider>
    )
}

export default ImageUploadContextProvider;