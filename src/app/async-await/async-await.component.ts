import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { PromiseService } from '../services/promise.service';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor( private promiseService : PromiseService) { }

  ngOnInit(): void {
    this.getData();
    this.getDatawithAysnAwait();
  }

  data1 : any;
  data2 : any;

  /*
      by default observable/promises are asynchronous
      they wont for the call to complete
      getDataByData1 is dependent on data1 
      but it wont wait for the data1 call to complete
      in promise.service if data1 is undefined we are rejecting it so it goes to error block
  */
  getData(){
  this.promiseService.getData1().then(
      resp => {
        this.data1 = resp;
        console.log(this.data1);
      }
    )
  
    this.promiseService.getDataByData1(this.data1).then(
      resp=>{
        this.data2 = resp;
        console.log(this.data2)
      },err=>{
        console.log('err block')
        console.log(err);
      }
    )
    
}

/*
    same example with async await 
    async should be applied function where we are making asynchronous calls
    await - to tell wait for this call to complete

  */
  async getDatawithAysnAwait(){
      const data1 = await this.promiseService.getData1();
      console.log(data1);
    
      this.promiseService.getDataByData1(data1).then(
        resp=>{
          this.data2 = resp;
          console.log(this.data2)
        },err=>{
          console.log('err block')
          console.log(err);
        }
      )
  }

}
