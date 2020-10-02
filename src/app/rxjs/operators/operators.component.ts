import { Component, OnInit } from '@angular/core';
import { of, interval, from } from 'rxjs';
import { map, filter, take, catchError } from "rxjs/operators";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    return of(1,2,3,4,5,6);
  }

  getDataUsingFrom(){
    return from([1,2,3,4,5])
  }

  map(){
    //example to find Square of number

    this.getData().pipe(
      map(num => num*num)
    ).subscribe(numSqu=> console.log(numSqu))
  }

  filter(){
    // filter odd numbers
    this.getData().pipe(
      filter(n => n%2!=0)
    ).subscribe(oddNum => console.log(oddNum))
  }

  mapFilter(){
    // filter odd number and find squares of them
    this.getData().pipe(
      filter(num => num%2!=0),
      map(num => num*num)
    ).subscribe(oddSqu => console.log(oddSqu))
  }

  from(){
    this.getDataUsingFrom().subscribe(resp=>console.log(resp))
    this.getDataUsingFrom().subscribe(resp=>console.log(resp))
  }

  of(){
    this.getData().subscribe(resp=>console.log(resp))
    this.getData().subscribe(resp=>console.log(resp))
  }

  // take(3) - takes first thtee values in stream
  take(){
    const numbers = interval(1000);
    const takeThree = numbers.pipe(take(3));
    
    takeThree.subscribe(value => console.log("Subscriber: " + value));
  }

  getData2(){
    // return of(
    //   {
    //     response : ['a','b','c','d','e'],
    //     status : 200
    //   }
    // )

    return of(
      {
        status : 500
      }
    )
  }

  errorHandler(){
    return this.getData2().pipe(
      map(resp=> {
        if(!resp['response']){
          throw new Error('Value expected!')
        }

        return resp['response']
      }),
      catchError(err => of([]))
    )
  }

  testErrorHandler(){
    this.errorHandler().subscribe(
      (res)=> console.log(res),
      (err)=>console.log(err)
    )
  }

  



}
