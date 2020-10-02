import { Component, OnInit, ViewChild, DoCheck, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  course : string ;

  constructor() {
    console.log('on-changes-parent constructor')
   }

   ngOnChanges(){
    console.log('on-changes-parent on changes');
  }

  ngOnInit(): void {
    console.log('on-changes-parent init')
  }

  ngDoCheck(){
    console.log('on-changes-parent do check');
  }

  ngAfterContentInit(){
    console.log('on-changes-parent after content init');
  }


  ngAfterViewChecked(){
    console.log('on-changes-parent after view checked');
  }

  /*

  */
  ngAfterContentChecked(){
    console.log('on-changes-parent after content checked');
  }

  /*
  will be called only once after the first ngAfterContentChecked()
  */
 ngAfterViewInit(){
  console.log('on-changes-parent after view init');
}

 

  // to access the child component methods and properties use ViewChild

  @ViewChild(OnChangesComponent) onChangesComponent : OnChangesComponent;

  getColor(){
    return 'red';
  }

  getStyles(){
    return {
      'color':this.getColor(),
      'font-size.px':30,
      'font-weight':800
    }
  }
  
  isValid:true;
  getClasses(){
    console.log('getting class')
    return ['app-success-colorr','app-text-color']

  }

}
