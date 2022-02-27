import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }


  findByEmailLike(email : string){
    return this.httpClient.get(
    `http://localhost:9090/user/like/${email}`
    )
  }


  findByEmail(email : string){
    return this.httpClient.get(
    `http://localhost:9090/user/${email}`
    )
  }
}
