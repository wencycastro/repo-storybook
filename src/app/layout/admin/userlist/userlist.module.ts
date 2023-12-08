import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { UserlistRoutingModule } from './userlist-routing.module';



@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule
  ]
})
export class UserlistModule { }
