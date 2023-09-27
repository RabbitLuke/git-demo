import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFact() {
    return this.http.get<any>(`https://api.chucknorris.io/jokes/random`);
  }
}
