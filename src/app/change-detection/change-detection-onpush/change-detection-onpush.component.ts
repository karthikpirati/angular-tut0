import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-detection-onpush',
  templateUrl: './change-detection-onpush.component.html',
  styleUrls: ['./change-detection-onpush.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnpushComponent implements OnInit {

  constructor(private userService : UserService) { }

  name : FormControl = new FormControl('');

  firstName : string = '';
  firstName$ : Observable<any> | null = null;
  num : number = 0;


  dataReceivedFromChildThroughEmitter : any | null = null;

  ngOnInit(): void {

    setInterval(()=>{
      this.num = Math.random();
    },1000)

  }

  test(){
    console.log(this.name.value)
    this.userService.findByEmail(this.name.value).subscribe(resp=>{
      if(resp){
        this.firstName = resp['firstName']
      }
    })
  }


  testAsync(){
    console.log(this.name.value)
    this.firstName$ = this.userService.findByEmail(this.name.value);
  }


  onPushWithEmit(value){
    console.log("onPushWithEmit")
    this.dataReceivedFromChildThroughEmitter = value
  }

}
