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
    path: "manage/approvedbooks",
    loadChildren: () => import('./layout/admin/approvedbooks/approvedbooks.module').then(mod => mod.ApprovedbooksModule),
  },
  {
    path: "manage/pendingbooks",
    loadChildren: () => import('./layout/admin/pendingbooks/pendingbooks.module').then(mod => mod.PendingbooksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
