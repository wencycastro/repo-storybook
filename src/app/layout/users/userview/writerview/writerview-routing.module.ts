import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WriterviewComponent } from './writerview.component';



const routes: Routes = [
  {
    path: '',
    component: WriterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterviewRoutingModule { }
