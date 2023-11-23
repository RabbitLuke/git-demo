import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Feedback } from '../models/feedback';

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
   const name = this.form.get('name')?.value;
   const feedback = this.form.get('feedback')?.value;

   this.feedbackService.sendFeedback({name, feedback});
  }
}
