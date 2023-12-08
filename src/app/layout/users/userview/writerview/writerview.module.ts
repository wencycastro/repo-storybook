import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterviewRoutingModule } from './writerview-routing.module';
import { WriterviewComponent } from './writerview.component';



@NgModule({
  declarations: [
    //WriterviewComponent
  ],
  imports: [
    CommonModule,
    WriterviewRoutingModule
  ]
})
export class WriterviewModule { }
