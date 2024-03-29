import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StructuralDirectivesComponent } from "./directives/structural-directives/structural-directives.component";
import { AttributeDirectivesComponent } from "./directives/attribute-directives/attribute-directives.component";
import { TemplateDrivenFormsComponent } from "./forms/template-driven-forms/template-driven-forms.component";
import { ReactiveFormsComponent } from "./forms/reactive-forms/reactive-forms.component";
import { ObservablesComponent } from "./rxjs/observables/observables.component";
import { SubjectComponent } from "./rxjs/subject/subject.component";
import { OperatorsComponent } from "./rxjs/operators/operators.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { FileUploadComponent } from "./tutorial-common/file-upload/file-upload.component";
import { LoginComponent } from "./tutorial-common/login/login.component";
import { AsyncAwaitComponent } from "./async-await/async-await.component";
import { PromiseComponent } from "./promise/promise.component";
import { RegistrationComponent } from "./tutorial-common/registration/registration.component";
import { MappingOperatorsComponent } from "./rxjs/mapping-operators/mapping-operators.component";
import { ChangeDetectionOnpushComponent } from "./change-detection/change-detection-onpush/change-detection-onpush.component";
import { ChangeDetectionDefaultComponent } from "./change-detection/change-detection-default/change-detection-default.component";
import { NgTemplateComponent } from "./ang-templates/ng-template/ng-template.component";
import { NgTemplateOutletComponent } from "./ang-templates/ng-template-outlet/ng-template-outlet.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "mappingoperators", component: MappingOperatorsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "structural-directives", component: StructuralDirectivesComponent },
  { path: "attribute-directives", component: AttributeDirectivesComponent },
  { path: "template-driven", component: TemplateDrivenFormsComponent },
  { path: "reactive-forms", component: ReactiveFormsComponent },
  { path: "observables", component: ObservablesComponent },
  { path: "subject", component: SubjectComponent },
  { path: "operators", component: OperatorsComponent },
  { path: "user", component: UserComponent },
  { path: "fileupload", component: FileUploadComponent },
  { path: "promise", component: PromiseComponent },
  { path: "asyncAwait", component: AsyncAwaitComponent },
  { path: "cdonPush", component: ChangeDetectionOnpushComponent },
  { path: "cddefault", component: ChangeDetectionDefaultComponent },
  {path : 'ngtemplate',component: NgTemplateComponent},
  {path : 'ngtemplateoutlet',component: NgTemplateOutletComponent}
  // {
  //   path: '',
  //   //canActivate: [AuthGuardService],
  //   children: [
  //     { path: 'structural-directives', component: StructuralDirectivesComponent },
  //     { path: 'attribute-directives', component: AttributeDirectivesComponent },
  //     { path: 'template-driven', component: TemplateDrivenFormsComponent },
  //     { path: 'reactive-forms', component: ReactiveFormsComponent },
  //     { path: 'observables', component: ObservablesComponent },
  //     { path: 'subject', component: SubjectComponent },
  //     { path: 'operators', component: OperatorsComponent },
  //     { path: 'user', component: UserComponent },
  //     {path: 'fileupload', component: FileUploadComponent },
  //     {path: 'promise', component: PromiseComponent },
  //     {path: 'asyncAwait', component: AsyncAwaitComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
