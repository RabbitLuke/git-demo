import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private feedbackService: FeedbackService, private formBuilder: FormBuilder,) {
    feedbackService.getFact().subscribe(res => {
      console.log('wow', res);
    });
  }

  onSubmit(): void {
   // Do a thing
  }
}
