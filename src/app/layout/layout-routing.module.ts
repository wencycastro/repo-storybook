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
        path: "", redirectTo: "dashboard", pathMatch: "prefix",
      },
      {
        path: "manage/dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "manage/approvedbooks",
        loadChildren: () => import('./admin/approvedbooks/approvedbooks.module').then(mod => mod.ApprovedbooksModule),
      },
      {
        path: "manage/pendingbooks",
        loadChildren: () => import('./admin/pendingbooks/pendingbooks.module').then(mod => mod.PendingbooksModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
