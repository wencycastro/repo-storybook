import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserviewComponent } from './userview.component';
import { UserviewRoutingModule } from './userview-routing.module';
import { WriterviewComponent } from './writerview/writerview.component';



@NgModule({
  declarations: [
    UserviewComponent,
    WriterviewComponent
  ],
  imports: [
    CommonModule,
    UserviewRoutingModule
  ]
})
export class UserviewModule { }
