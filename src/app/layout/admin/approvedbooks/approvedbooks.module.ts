import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedbooksComponent } from './approvedbooks.component';
import { ApprovedbooksRoutingModule } from './approvedbooks-routing.module';



@NgModule({
  declarations: [
    ApprovedbooksComponent
  ],
  imports: [
    CommonModule,
    ApprovedbooksRoutingModule
  ]
})
export class ApprovedbooksModule { }
