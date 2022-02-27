import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHooksModule } from './life-cycle-hooks/life-cycle-hooks.module';
import { DirectivesModule } from './directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormsModule } from './forms/forms.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RxjsModule } from './rxjs/rxjs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { PromiseComponent } from './promise/promise.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { UsersModule } from './users/users.module';
import { TutorialCommonModule } from './tutorial-common/tutorial-common.module';
import { CommonService } from './services/common.service';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { AngTemplatesModule } from './ang-templates/ang-templates.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    AsyncAwaitComponent,
    PromiseComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LifeCycleHooksModule,
    DirectivesModule,
    FormsModule,
    AppFormsModule,
    ReactiveFormsModule,
    RxjsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UsersModule,
    TutorialCommonModule,
    ChangeDetectionModule,
    AngTemplatesModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
