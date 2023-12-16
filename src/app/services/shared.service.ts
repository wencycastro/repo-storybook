import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000'; // Update with your backend URL
  registerUser(userData: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }

  login(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer`);
    const body = { userName: userName, password: password };
    return this.http.post(`${this.apiUrl}/auth/login`, body, {headers});
  }
  
  getStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stories`);
  }

  searchStories(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?q=${query}`);
  }

  filterStories(genre: string, ratings: string): Observable<any[]> {
    const url = `${this.apiUrl}/filter?genre=${genre}&ratings=${ratings}`;
    return this.http.get<any[]>(url);
  }

  getStoryById(storyId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stories/${storyId}`);
  }
}
