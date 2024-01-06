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
  
  books: any[] = [];

  bookData = {
    title: '',
    author: '',
    genre: '',
    ratings: null,
    content: '',
  };

  constructor(private bookService: SharedService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe(
      (allBooks) => {
        this.books = allBooks;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
