import https from "../http-common";

function FileUploadService(file) {
    let formData = new FormData();

    formData.append("image", file);

    try {
        const result = https.post("/users/upload-image", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log(result)
        return result;
    } catch (e) {
    console.error(e)
    }
    /*getImage() {
        return http.get("/users/image");
    }*/
}

export default FileUploadService;