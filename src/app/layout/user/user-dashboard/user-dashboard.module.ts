import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { StoryCardModule } from 'src/app/components/story-card/story-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryViewModule } from 'src/app/components/story-view/story-view.module';
import { StoryListModule } from 'src/app/components/story-list/story-list.module';



@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    StoryCardModule,
    StoryViewModule,
    StoryListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDashboardModule { }
