import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritersComponent } from './writers.component';
import { WritersRoutingModule } from './writers-routing.module';
import { ComponentsModule } from 'src/app/components/component.module';



@NgModule({
  declarations: [
    WritersComponent
  ],
  imports: [
    CommonModule,
    WritersRoutingModule,
    ComponentsModule
  ]
})
export class WritersModule { }
