import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeBuilderUiComponent } from './resume-builder-ui/resume-builder-ui.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuardGuard } from './login-guard.guard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderUiComponent,
    SidebarComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    InsertFormComponent,
    LoginPageComponent,
    UserHomeComponent,
    SignupComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({showForeground:true})
   
  
  ],
  providers: [NgbCarousel,LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
