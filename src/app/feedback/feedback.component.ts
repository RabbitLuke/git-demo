import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
public form: FormGroup = new FormGroup({
  name: new FormControl(''),
  feedback: new FormControl('')
});

  constructor(private feedbackService: FeedbackService) {
  }

  onSubmit(): void {
   // Do a thing
   this.feedbackService.sendFeedback('', '').subscribe((result => {
    // Do a thing
   }))
  }
}
