import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  usersCountSubject = new BehaviorSubject<number>(0);
  usersCount$ : Observable<number> = this.usersCountSubject.asObservable();
}
