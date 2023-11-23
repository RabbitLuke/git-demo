import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, timer } from 'rxjs';
import { Feedback } from './models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  
  sendFeedback(feedback: Feedback) {
    return timer(2000).pipe(tap((result) => {
      console.log("Feedback submitted");
    }));
  }
}
