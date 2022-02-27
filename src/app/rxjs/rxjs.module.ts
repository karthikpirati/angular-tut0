import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectComponent } from './subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';
import { CommonService } from '../services/common.service';
import { MappingOperatorsComponent } from './mapping-operators/mapping-operators.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ObservablesComponent, SubjectComponent, OperatorsComponent, MappingOperatorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers : [
    CommonService
  ],
  exports : [
    ObservablesComponent,
    SubjectComponent,
    OperatorsComponent
  ]
})
export class RxjsModule { }
