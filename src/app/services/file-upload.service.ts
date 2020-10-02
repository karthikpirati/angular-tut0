import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient : HttpClient) { }

  uploadFile(selectedFile){
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', selectedFile, selectedFile.name);
    
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
  }
}
