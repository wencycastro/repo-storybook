import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterDashboardComponent } from './writer-dashboard.component';
import { WriterDashboardRoutingModule } from './writer-dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WriterDashboardComponent
  ],
  imports: [
    CommonModule,
    WriterDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WriterDashboardModule { }
