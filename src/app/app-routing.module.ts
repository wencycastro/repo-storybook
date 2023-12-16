import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/home/home/home.module').then(mod => mod.HomeModule),
  }, 
  {
    path: "login",
    loadChildren: () => import('./auth/login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "register",
    loadChildren: () => import('./auth/registration/registration.module').then(mod => mod.RegistrationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
