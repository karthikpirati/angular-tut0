import { BehaviorSubject } from "rxjs";
import { StorageUtilService } from "../services/storage-util.service";

export function SaveSubjectValues<T>(storage:any, storageKey : string, storageContext?: string, defaultValue?:any){
// now internally using cloure to petform task
    return function(target:any, key : string){
        console.log(`target ${target}`)
        console.log(target)
        console.log(`key ${key}`)
        const secret = `_${key}$`;
        Object.defineProperty(target,key,{
            get : function() {
                console.log("getter method")
                console.log(this[secret])
                if(this[secret]){
                    return this[secret]
                }

                console.log(`default value ${defaultValue}`)

                // let val = StorageUtilService.get(storage, storageKey, storageContext);
                this[secret] = new BehaviorSubject(defaultValue)
                let originalMethod  = this[secret].next;

                this[secret].next = (value : any)=> {
                    console.log(`next method value ${value}`)
                    // StorageUtilService.save(storage,storageContext, storageContext)
                    originalMethod.apply(this[secret], [value]);
                }

                return this[secret];

            },
            set : function(value : any){
                console.log("setter method")
                console.log(value)
            }

            

        })
    }
}