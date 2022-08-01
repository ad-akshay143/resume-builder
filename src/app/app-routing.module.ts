import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './admin.guard';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResumeBuilderUiComponent } from './resume-builder-ui/resume-builder-ui.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:"",component:UserHomeComponent},
  {path:"EditResume",component:ResumeBuilderUiComponent,canActivate:[LoginGuardGuard]},
  {path:"Preview",component:MainPageComponent,canActivate:[LoginGuardGuard]},
  {path:"LoginPage",component:LoginPageComponent},
  {path:"UserPage",component:UserHomeComponent,canActivate:[LoginGuardGuard]},
  {path:"AdminPage",component:AdminPageComponent,canActivate:[AdminGuard]},
  {path:"SignUp",component:SignupComponent},
  {path:"image",component:InsertFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
