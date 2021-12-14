import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{
  path: "",

  children:[
    {
      path:"login", component: LoginComponent
    },
    {
      path:"register", component: RegisterComponent
    },
    {
      path:"dashboard" , component: DashboardComponent
    },
    {
      path:"**", redirectTo: "dashboard"
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
