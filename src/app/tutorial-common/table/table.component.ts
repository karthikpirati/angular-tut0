import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { User } from '../../models/user'
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges {

  constructor(private commonService : CommonService) { }
  usersCount : number ;
  userCountSubscription : Subscription;


  ngOnInit(): void {
    this.userCountSubscription = this.commonService.usersCount$.subscribe(count=> this.usersCount=count);


  }

  @Input() userList:User[];
  @Input() count : number;
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();

  //userDataSource : MatTableDataSource<User> =  new MatTableDataSource([]);

  //displayedColumns : string[] = ['firstName','lastName','email','mobileNo','actions']


  ngOnChanges(){
    console.log("ngOnChanges")
    console.log(this.userList);
    // if(this.userList.length>0){
    //   this.userDataSource= new MatTableDataSource(this.userList);
    // }
    }
    

  delete(email:string){
    console.log(email);
    this.deleteUser.emit(email);
  }

  edit(user){
    this.editUser.emit(user);
  }

  ngDestroy(){
    this.userCountSubscription.unsubscribe();
  }

}
