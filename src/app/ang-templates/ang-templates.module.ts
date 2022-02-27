import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';



@NgModule({
  declarations: [NgTemplateComponent, NgContainerComponent, NgTemplateOutletComponent],
  imports: [
    CommonModule
  ]
})
export class AngTemplatesModule { }
