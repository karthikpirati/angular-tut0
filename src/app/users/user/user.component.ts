import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonService } from 'src/app/services/common.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dialog : MatDialog,
    private authenticationService: AuthenticationService,
    private commonService : CommonService) { }


  users : User[] = [];
  userSubscription : Subscription;

 

  ngOnInit(): void {
    this.getAllUsers();
  }


  interValId : any;
  testTimeOut(){
    this.interValId = setInterval(()=>console.log('some loguc'), 1000);
  }

  create(){
    const dialogRef = this.dialog.open(UserDialogComponent,{
      width : '800px',
      hasBackdrop : false,
      data : {
        user : null,
        action : 'create'
      }
    });

    dialogRef.afterClosed().subscribe(
      resp=>{
        if(resp && resp['isSuccess']){
          this.users.push(resp['data'])
          this.commonService.usersCountSubject.next(this.users.length);
        }
      }
    )
  }

  editUser(user : User){
    console.log(user)
    const dialofRef=this.dialog.open(UserDialogComponent ,{
      width : '1000px',
      data : {
        user : user,
        action : 'update'
      }
    })

    dialofRef.afterClosed().subscribe(
      resp=>{
        if(resp && resp['isSuccess']){
          this.getAllUsers();
        //   console.log(this.users)
        //   this.users.forEach(user =>{
        //     if(resp['data'] && user.email === resp['data'].email){
        //       user =  resp['data'];
        //     }
        //   }
        //   )
        }
        console.log(this.users)
      }
    );
  }

  
    getAllUsers(){

    this.userSubscription = this.authenticationService.getAllUsers().subscribe(
      (resp : User[]) =>{
      this.users = resp;
      console.log(this.users);
      this.commonService.usersCountSubject.next(this.users.length);
    },err=>{

    }
    )
  }

  


  deleteUser(email){
    console.log(email);
    this.users.map((user:User)=>{
      user.age = 10;
    })

    this.authenticationService.deleteByEmail(email).subscribe(
      resp =>{
        //this.getAllUsers();
        this.users = this.users.filter((user : User) => user.email !==email);
      }
    )
    
    console.log(this.users);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
    clearInterval(this.interValId);
  }


}
