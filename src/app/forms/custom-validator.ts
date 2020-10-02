import { Validators, AbstractControl } from '@angular/forms';
import { of } from 'rxjs';

export class CustomValidator implements Validators{

    static emailValidator(control: AbstractControl) {
        console.log(control.value)
        let email = control.value; 
        if (email && email.indexOf("@") != -1) { 
        let [_, domain] = email.split("@"); 
        console.log(domain)
        if (domain !== "gmail.com") { 
          return {
            isEmailInValid : true
          }
        }
      }
      return of(null); 
      }
}