import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private router : Router,
    private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : '',
      password : ''
    })
  }

  loginForm : FormGroup;

  message : string = '';
  isInvalidUser : boolean;
  

  signUp(){
    this.router.navigate(['/register']);
  }

  submit(){
    console.log(this.loginForm.value)
    this.authService.authenticate(this.loginForm.value).subscribe(
      resp => {
        if(resp){
          this.authService.isAuthenticated=resp;
         this.router.navigate(['/home'])
        }else{
          this.message = 'Invalid Username and Password';
          this.isInvalidUser= true;
        }
         
      }
    )
  }

}
