import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "", redirectTo: "read", pathMatch: "prefix",
      },
      {
        path: "read",
        loadChildren: () => import('./user/user-dashboard/user-dashboard.module').then(mod => mod.UserDashboardModule),
      },
      {
        path: "write",
        loadChildren: () => import('./user/writer-dashboard/writer-dashboard.module').then(mod => mod.WriterDashboardModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
