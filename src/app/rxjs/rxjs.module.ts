import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectComponent } from './subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';



@NgModule({
  declarations: [ObservablesComponent, SubjectComponent, OperatorsComponent],
  imports: [
    CommonModule
  ],
  exports : [
    ObservablesComponent,SubjectComponent,OperatorsComponent
  ]
})
export class RxjsModule { }
