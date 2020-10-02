import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://localhost:9090/';
  isAuthenticated : boolean = true;


  /*
  channels(lot of channnels) : lot of http calls or lot of Observables
  subscribe : video
  handles multiple events 
  at multiple places in cose you can receive the data
  */
  register(user : User, action : string) : Observable<User>{
    if(action==='update'){
      return this.http.put<User>(`${this.baseUrl}user`,user);

      // new Observable(
      //   (observer) => observer.next("data what we got from spring boot")
      // )
    }else{
      return this.http.post<User>(`${this.baseUrl}user`,user);
    }
     //  return Observable of some type of 
  }

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}user`); //  return Observable of some type of 
  }


getSomeData(){
  // return of(  {
  //   data : {
  //     'val' : 'dummy'
  //   },
  //   status : 200
  // })

  return of(  {
    'value' : 'test'
  }) 


}

formatdata(){
  return this.getSomeData().pipe(
    map(
      resp => {
        if(resp['data']){
          return resp['data']
        }else{
          throw new Error('not valid data');
        }
      }
    ),
    catchError(err=> of({val:''}))
  )
}

  // http://localhost:9090/user?email=email
  getUserByEmail(email : string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}user/${email}`); //  return Observable of some type of 
   //return `${baseUrl}user?email=${email}`
  }

  deleteByEmail(email : string){
    return this.http.delete<User[]>(`${this.baseUrl}user/${email}`);
  }

  authenticate(user){
    console.log('authentication service')
    this.isAuthenticated=true;
    return of(this.isAuthenticated);
  }

  /*
  getUserByEmail()
  getUserByMobileNo()
  deleteUserByEmail()
  deleteByMobileNum
  */
}
