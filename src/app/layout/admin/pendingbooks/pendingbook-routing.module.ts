import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PendingbooksComponent } from './pendingbooks.component';



const routes: Routes = [
  {
    path: '',
    component: PendingbooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingbookRoutingModule { }
