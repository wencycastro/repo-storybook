import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-writer-dashboard',
  templateUrl: './writer-dashboard.component.html',
  styleUrls: ['./writer-dashboard.component.scss']
})
export class WriterDashboardComponent implements OnInit{

  books: any[] = [];

  bookData = {
    title: '',
    author: '',
    genre: '',
    ratings: null,
    coverImage: '',
  };

  constructor(private bookService: SharedService) {}

  ngOnInit() {
    this.getBooks();
  }

  addBook() {
    this.bookService.addBook(this.bookData).subscribe(
      (newlyCreatedBook) => {
        console.log('New book added:', newlyCreatedBook);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    
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
