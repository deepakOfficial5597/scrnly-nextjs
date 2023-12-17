import axios from "axios";

async function saveImageToDrive(dataUrl: any, fileName: string, fileExtension: string){
  try {
      const formData = await dataUrlToFormData(dataUrl, fileName, fileExtension);
      axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  } catch (error) {}
}

async function dataUrlToFormData(dataUrl: any, fileName: string, fileExtension: string) {
    
    const base64Data = dataUrl.split(',')[1];
    const binaryData = atob(base64Data);
    
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: `image/${fileExtension}` });
    
    const formData = new FormData();
    formData.append('file', blob, fileName);
  
    return formData;
}

export default saveImageToDrive