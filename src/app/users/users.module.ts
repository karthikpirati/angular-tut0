import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TutorialCommonModule } from '../tutorial-common/tutorial-common.module';



@NgModule({
  declarations: [UserComponent, UserDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TutorialCommonModule
  ],
  entryComponents : [UserDialogComponent]
})
export class UsersModule { }
