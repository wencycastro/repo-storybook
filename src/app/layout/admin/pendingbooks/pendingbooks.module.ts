import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingbooksComponent } from './pendingbooks.component';
import { PendingbookRoutingModule } from './pendingbook-routing.module';



@NgModule({
  declarations: [
    PendingbooksComponent
  ],
  imports: [
    CommonModule,
    PendingbookRoutingModule
  ]
})
export class PendingbooksModule { }
