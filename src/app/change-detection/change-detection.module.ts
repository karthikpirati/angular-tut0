import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionDefaultComponent } from './change-detection-default/change-detection-default.component';
import { ChangeDetectionOnpushComponent } from './change-detection-onpush/change-detection-onpush.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionOnpushChildComponent } from './change-detection-onpush-child/change-detection-onpush-child.component';



@NgModule({
  declarations: [ChangeDetectionDefaultComponent, ChangeDetectionOnpushComponent, ChangeDetectionOnpushChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ChangeDetectionModule { }
