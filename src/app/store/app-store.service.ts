import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SaveSubjectValues } from '../decorators/decorators';
import { StorageTypeEnum } from '../enums/storage-type.enum';
import { AppState$, AppStateSnapshot } from './app-state';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService extends Store{

  private _state : AppState$ = new AppState$();

  constructor(){
    super();
    this.initialState();
  }


  private test$ : BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  
  @SaveSubjectValues<any>(StorageTypeEnum.COOKIE, 'UserSession')
  private test2$ : Subject<any | null> = new Subject<any | null>();

  protected initialState(): void {
      this._state.test$ = this.test$.asObservable();
      this._state.test2$ = this.test2$.asObservable();
  }
  get state$(): any {
      return this._state;
  }
  get stateSnapshot(): any {
   const stateSnapshot = new AppStateSnapshot();
  stateSnapshot.test = this.test$.value; //
   return stateSnapshot;
  }
  clearAll(): void {
    this.test = null;
  }

  set test(test : any | null){
    this.test$.next(test);
  }

  set test2(test : any | null){
    console.log("setting value to test2")
    console.log(test)
    this.test2$.next(test);
  }
}
