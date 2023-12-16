import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule
  ]
})
export class AdminDashboardModule { }
