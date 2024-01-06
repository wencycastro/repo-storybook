import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000'; // Update with your backend URL
  registerUser(userData: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }

  login(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer`);
    const body = { userName: userName, password: password };
    return this.http.post(`${this.apiUrl}/auth/login`, body, { headers });
  }

  addBook(bookData: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/book/add`, bookData);
  }

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/book/getAll`).pipe(
      catchError((error) => {
        console.error('Error getting all books:', error);
        return throwError('Unable to get books');
      })
    );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/users`);
  }

  getTotalCounts(): Observable<{ totalUsers: number, totalBooks: number }> {
    return this.http.get<{ totalUsers: number, totalBooks: number }>(`${this.apiUrl}/auth/counts`);
  }

  removeUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/auth/remove/${userId}`);
  }

  removeBook(BookId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/book/removeBook/${BookId}`);
  }
}

