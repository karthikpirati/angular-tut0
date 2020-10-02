import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { EmailValidatorDirective } from './custom-form-directives/template-driven/email-validator.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TemplateDrivenFormsComponent, EmailValidatorDirective, ReactiveFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports : [
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    EmailValidatorDirective
  ]
})
export class AppFormsModule { }
