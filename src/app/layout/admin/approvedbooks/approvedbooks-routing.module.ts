import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedbooksComponent } from './approvedbooks.component';



const routes: Routes = [
  {
    path: '',
    component: ApprovedbooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedbooksRoutingModule { }
