import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterDashboardComponent } from './writer-dashboard.component';
import { WriterDashboardRoutingModule } from './writer-dashboard-routing.module';



@NgModule({
  declarations: [
    WriterDashboardComponent
  ],
  imports: [
    CommonModule,
    WriterDashboardRoutingModule
  ]
})
export class WriterDashboardModule { }
