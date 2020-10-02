import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit,OnChanges,DoCheck {

  @Input() course : string;

  constructor() {
    console.log('on-changes constructor')
   }

  ngOnInit(): void {
    console.log('on-changes on init');
  }

  ngDoCheck(){
    console.log('on-changes do check');
  }

  /*
  Simple Change is an object that store input property as a key with its current and old values
  SimpleChanges is an array if SimpleChange
  */
  ngOnChanges(changes : SimpleChanges) : void {
    console.log('on-changes ng on changes')
    console.log(changes)
    for(let prop in changes){
      console.log(prop);
      let value=changes[prop];
      console.log(value.currentValue);
      console.log(value.previousValue)
    }
  }

}
