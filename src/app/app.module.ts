import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';

import { StudentregisterComponent } from './components/studentregister/studentregister.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    AdminregisterComponent,
   
    StudentregisterComponent,
        StudentdashboardComponent,
        AdmindashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
