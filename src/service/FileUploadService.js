import https from '../http-common';

function FileUploadService(file) {
  const formData = new FormData();

  formData.append('image', file);

  try {
    const result = https.post('/users/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
}

export default FileUploadService;
