import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoading : boolean = false;

  loginText = 'Login';
    signUpText = 'Sign Up'; 
    // lessons = ['Lesson 1', 'Lessons 2'];
    lessons = null;

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }



}
