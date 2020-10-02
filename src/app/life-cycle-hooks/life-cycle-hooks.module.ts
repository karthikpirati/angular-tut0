import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';


@NgModule({
  declarations: [OnChangesComponent, OnChangesParentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    OnChangesComponent,
    OnChangesParentComponent
  ]
})
export class LifeCycleHooksModule { }
