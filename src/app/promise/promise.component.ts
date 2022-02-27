import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../services/promise.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private promiseService : PromiseService) { }

  ngOnInit(): void {
    //this.getData();
  }

  getData(){
    this.promiseService.getData1().then(
      resp => console.log(resp),
      err=>{
        console.log('error')
        console.log(err)
      }
    ).catch(err => console.log(`error block ${err}`))
    .finally(() => console.log('finally'))
  }

}
