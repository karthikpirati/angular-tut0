import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private httpClient : HttpClient) { 

  }
  
  getData1(){
    return new Promise(
      (resolve,reject)=>{resolve("data1")} // executor
      )
  }

  getDataByData1(data1){
    console.log("getDataByData1"+data1);
    return new Promise((resolve,reject)=>{
      if(data1){
        resolve("data2")
      }else{
        reject("none")
      }
    })
  }

  convertingObservableToPromise1(){
   // return of("observableToPromose1").toPromise();

    return this.httpClient.get('http://localhost:9090/users').toPromise();
  }

  convertingObservableToPromise2(){
    return of("observableToPromose1").toPromise();
  }
}
