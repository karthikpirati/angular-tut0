import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { User } from 'src/app/models/user';
import { CustomValidator } from 'src/app/forms/custom-validator';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  user : User;
  action : string;

  constructor(private fb : FormBuilder,
    private authenticationService: AuthenticationService,
    private dialog : MatDialog,
    private dialogRef : MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data : any
    ) {
      console.log("reactive form cons")
      if(data['action']==='update'){
       this.user= data['user'];
      }
      this.action= data['action'];
      
     }

  userForm : FormGroup;

  age : FormControl = new FormControl(['',Validators.required]);
  confirm ="no";
  isSuccess : boolean = true;

  states : any[] = [
    {key :"AP" , value:"Andhra Pradesh"},
    {key :"TL" , value:"Telangana"},
    {key :"KN" , value:"Karnataka"},
    {key :"TN" , value:"Tamilnadu"},
  ];
  

  ngOnInit(): void {
    console.log("reactive form on init")
    this.userForm= this.fb.group({
    firstName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    lastName : ['', [Validators.required]],
    password : ['', [Validators.required]],
    confirmPassword : ['', [Validators.required]],
    email : ['', [Validators.required]],
    mobileNo : ['', [Validators.required]],
    confirm : ['yes',[Validators.required]],
    dob : [null, [Validators.required]],
    state :['TL'],
  })

 

  if(this.action==='update'){
    this.userForm.get('firstName').setValue(this.user.firstName);
    this.userForm.get('lastName').setValue(this.user.lastName);
    this.userForm.get('password').setValue(this.user.password);
    this.userForm.get('confirmPassword').setValue(this.user.confirmPassword);
    this.userForm.get('email').setValue(this.user.email);
    this.userForm.get('mobileNo').setValue(this.user.mobileNo);
    }


  

  this.userForm.value
  this.userForm.valid
  this.userForm.invalid

  this.userForm.valueChanges.subscribe(resp=>{
    console.log(resp);
  })

  // Observbles with reactive forms
  this.userForm.get('firstName').valueChanges.subscribe(firstName => console.log(firstName));

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



  
  confirmChange(checked){
    console.log(checked)
    if(checked){
      this.confirm="yes"
    }else{
      this.confirm="no"
    }
  }

  

  fnChange(name){
    console.log(name);
  }

  stateChange(){
    console.log(this.userForm.get('state').value)
  }

  signUp(){
   //this.isSuccess = false;
    console.log(this.userForm.value);
    console.log(this.userForm.get('firstName').value);

    this.authenticationService.register(this.userForm.value, this.action).subscribe(
     (resp:User) =>{
          this.dialogRef.close({isSuccess : true , data : resp});
          this.isSuccess = true;
      },err =>{
        this.isSuccess = false;
        //this.message ="Some error occured"
      }
      )

  }

}
