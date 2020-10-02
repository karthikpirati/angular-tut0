import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private authenticationService: AuthenticationService) { }
  userForm : FormGroup;

  age : FormControl = new FormControl(['',Validators.required]);


  users : User[] = [];

  /*
    if we did not place validators inside []
    then we will get an forngroup expects and observable
  */
  ngOnInit(): void {
    this.userForm= this.fb.group({
    name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    password : ['', [Validators.required]],
    confirmPassword : ['', [Validators.required]],
    email : ['', [Validators.required, CustomValidator.emailValidator]],
    mobileNo : ['', [Validators.required]],
    city : [''],
    gender : ['']
  })




  this.getAllUsers();

  this.userForm.value
  this.userForm.valid
  this.userForm.invalid

  /*
  this.userForm.get('email')
  this.userForm.get('firstName').value; //John
  this.userForm.setValue({'firstName': 'John'})

  this.userForm.value;

  {
    firstName : John
    lastName : Smith
  }
  */

  }

  getAllUsers(){
    this.authenticationService.getAllUsers().subscribe(
      (resp : User[]) =>{
      this.users = resp;
      console.log(this.users)
    }
    )
  }


  signUp(){
    console.log(this.userForm.value);
    console.log(this.userForm.get('firstName').value);
    this.authenticationService.register(this.userForm.value , 'create').subscribe(
     (resp:User) =>{
          this.users.push(resp);
          console.log(this.users)
      },err =>{

      }
    )

  }

  deleteUser(email){
    console.log(email);
    this.users.map((user:User)=>{
      user.age = 10;
    })
    this.users = this.users.filter((user : User) => user.email !==email);
    console.log(this.users);


  []
  }


  fnChange(event){

  }


  

}

/*
export class FormGroup{
firstName : FormControl;
lastName : FormControl

set firstName(){

}

get firstName(){

}
}

class Employee{
 Address address ;
 firstName;
 lastName
}

class Address{

}

employee
employee.getFirstName
*/


