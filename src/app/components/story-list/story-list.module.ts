import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './story-list.component';
import { StoryCardModule } from '../story-card/story-card.module';



@NgModule({
  declarations: [
    StoryListComponent
  ],
  imports: [
    CommonModule,
    StoryCardModule
  ],
  exports: [
    StoryListComponent
  ]
})
export class StoryListModule { }
