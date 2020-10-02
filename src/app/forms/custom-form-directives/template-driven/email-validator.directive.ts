import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[emailValidator][ngModel]',
  providers : [
    { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }
  ]
})
export class EmailValidatorDirective implements Validator{
  //validator: ValidatorFn;
  
  constructor(
  ) { }


  /*
    It takes one input parameter of type AbstractControl and it returns an object of a key-value pair if the validation fails.
    If validation fails it returns an object of key value pairs where
    key is the name of the error 

  */
  validate(control: AbstractControl) {
    console.log(control)
    let email = control.value; 
    if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if (domain !== "gmail.com") { 
      return {
        emailDomain: {
          'parsedDomain' : domain
        }
      }
    }
  }
  return null; 
  }

  /*
    1) Accepts an instance of a FormControl as the first param.
    2) We get the email value from the form control.
    3) Only bother checking if the email contains an "@" character.
    4) Extract the domain part from the email.(.gmail.com , .yahoo.com etc)
    5) If the domain is not gmail.com then return an error object with some perhaps helpful tips as to why it’s failing.
    6) Returns null if email is valid


  */





}
