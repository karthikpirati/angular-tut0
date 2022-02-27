import { Injectable, Injector } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StorageTypeEnum } from '../enums/storage-type.enum';
import { CustomLocalStorageService } from './custom-local-storage.service';
import { StaticInjector } from './static-injector';



@Injectable({
  providedIn: 'root'
})
export class StorageUtilService {

  static _cookieService : CookieService | null = null;

  constructor(cookieService : CookieService) { }


  /*
    we cannot use reference inside static context so we have do as below to achieve that
  */
  private static get cookieService(): CookieService{
    console.log("injecting coolijg service")
    console.log(this._cookieService)
    if(this._cookieService==null || this._cookieService == undefined){
      // this._cookieService = Injector.get(CookieService);
      console.log(this._cookieService)
    }

    return this._cookieService;
  }

  public static save(storage : StorageTypeEnum, key : string, value : any, context?: string){
    console.log("cookie servive save method called")
      switch(storage){
        case StorageTypeEnum.COOKIE: {
          this.remove(storage, key);
          value? this.cookieService.set(key, JSON.stringify(value)): this.remove(storage,key);
          break;
        }
        case StorageTypeEnum.LOCAL_STORAGE: {
          if(context){
            localStorage.setItem(key, value)
          }
        }
        case StorageTypeEnum.SESSION: {

        }
      }
  }

  public static get<T>(storage : StorageTypeEnum, key : string, context?: string){
    console.log("cookie service get method")
    switch(storage){
      case StorageTypeEnum.COOKIE: {
        let val = this.cookieService.get(key);
        if(val){
          return <T>JSON.parse(val)
        }
        break;
      }
      case StorageTypeEnum.LOCAL_STORAGE: {
        let val = localStorage.getItem(key)
        if(val){
          return <T>JSON.parse(val)
        }
        break;

      }
      case StorageTypeEnum.SESSION: {
        return null;
      }
    }

    return null;
}


  public static remove(storage : StorageTypeEnum, key : string){
    switch(storage){  
      case StorageTypeEnum.COOKIE: {
        this.cookieService.delete(key);
        break;
      }
      case StorageTypeEnum.LOCAL_STORAGE: {
        localStorage.removeItem(key);
        break;
      }
      case StorageTypeEnum.SESSION: {

      }
    }
  }
}
