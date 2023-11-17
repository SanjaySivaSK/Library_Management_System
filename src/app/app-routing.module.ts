import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { StudentregisterComponent } from './components/studentregister/studentregister.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

const routes: Routes = [{
  path:"",component:HomeComponent
},{
  path:"adminlogin",component:AdminLoginComponent
},{
  path:"studentlogin",component:StudentLoginComponent
},{path:"adminregister",component:AdminregisterComponent},{
  path:"studentregister",component:StudentregisterComponent
},{
  path:"adminhome",component:AdmindashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
