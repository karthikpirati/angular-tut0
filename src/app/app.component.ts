import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { CommonService } from './services/common.service';
import { AppStoreService } from './store/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-tutorial-app';
  count : number;

  constructor(private authService : AuthenticationService,private router : Router,private cs : CommonService,
    private appStore : AppStoreService){
    console.log('app-root constructor');
  }

  ngOnInit(){
   this.count = this.cs.getCount();
    this.cs.setCount(30);
    // this.appStore.test = ["v1","v2"];
    // console.log(this.appStore.stateSnapshot.test)
  }
}
