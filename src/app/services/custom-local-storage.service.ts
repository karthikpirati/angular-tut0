import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLocalStorageService {

  constructor() { }

  static setItem(key : any, value : any){
    if(value){
      value = JSON.stringify(value);
    }

    localStorage.setItem(key,value);
  }

  static getItem(key : string): any{
    let value = localStorage.getItem(key);
    return JSON.parse(value);
  }

    
}
