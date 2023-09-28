import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  
  sendFeedback(email: string, feedback: string) {
    return timer(2000).pipe(tap((result) => {
      console.log("Feedback submitted");
    }));
  }
}
