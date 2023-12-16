import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
  story: any;

  constructor(private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const storyId = params['id'];
      this.fetchStoryDetails(storyId);
    });
  }

  fetchStoryDetails(storyId: string): void {
    this.sharedService.getStoryById(storyId).subscribe(
      (data) => {
        this.story = data;
      },
      (error) => {
        console.error('Error fetching story details:', error);
      }
    );
  }
}
