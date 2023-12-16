import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  stories: any[] = [];
  searchControl = new FormControl('');
  genreFilterControl = new FormControl('all');
  ratingsFilterControl = new FormControl('all');

  constructor(private SharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.fetchStories();
    this.setupSearchListener();
    
  }

  fetchStories(): void {
    this.SharedService.getStories().subscribe(
      (data) => {
        this.stories = data;
      },
      (error) => {
        console.error('Error fetching stories:', error);
      }
    );
  }

  setupSearchListener(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => query ? this.SharedService.searchStories(query) : of([]))
      )
      .subscribe((searchResults) => {
        this.stories = searchResults;
      });
  }

  filterStories(): void {
    const genre = this.genreFilterControl.value || 'all'; // Provide a default value
    const ratings = this.ratingsFilterControl.value || 'all'; // Provide a default value
  
    console.log('Genre:', genre);
  
    // Call your service to filter stories based on genre and ratings
    this.SharedService.filterStories(genre, ratings).subscribe(
      (filteredStories) => {
        this.stories = filteredStories;
      },
      (error) => {
        console.error('Error filtering stories:', error);
      }
    );
  }
  readStory(story: any): void {
    // Navigate to the story details page with the story id
    this.router.navigate(['/story-details', story.id]);
  }
}
