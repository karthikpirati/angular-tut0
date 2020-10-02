import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AttributeDirectivesComponent, StructuralDirectivesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    AttributeDirectivesComponent,
    StructuralDirectivesComponent
  ]
})
export class DirectivesModule { }
