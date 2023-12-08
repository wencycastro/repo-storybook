import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () => import('./auth/login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "registration",
    loadChildren: () => import('./auth/registration/registration.module').then(mod => mod.RegistrationModule),
  },
  {
    path: "manage/dashboard",
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: "user/home",
    loadChildren: () => import('./layout/users/userview/userview.module').then(mod => mod.UserviewModule),
  },
  {
    path: "writer/home",
    loadChildren: () => import('./layout/users/userview/writerview/writerview.module').then(mod => mod.WriterviewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
