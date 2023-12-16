import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryViewComponent } from './story-view.component';



@NgModule({
  declarations: [
    StoryViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoryViewComponent
  ]
})
export class StoryViewModule { }
