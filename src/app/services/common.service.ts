import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  count : number = 10 ;

  public getCount(){
    return this.count;
  }

  public setCount(value){
    this.count = value; 
  }

  constructor() { }

  usersCountSubject = new BehaviorSubject<number>(0);
  usersCount$ : Observable<number> = this.usersCountSubject.asObservable();
}
