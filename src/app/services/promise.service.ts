import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { 

  }
  
  getData1(){
    return new Promise((resolve,reject)=>{resolve("data1")})
  }

  getDataByData1(data1){
    return new Promise((resolve,reject)=>{
      if(data1){
        resolve("data2")
      }else{
        reject("none")
      }
    })
  }

  convertingObservableToPromise1(){
    return of("observableToPromose1").toPromise();
  }

  convertingObservableToPromise2(){
    return of("observableToPromose1").toPromise();
  }
}
