import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Feedback } from '../models/feedback';
import { Modal, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
public form: FormGroup = new FormGroup({
  name: new FormControl(''),
  feedbackType: new FormControl(null),
  feedback: new FormControl('')
});

 @ViewChild("feedbackModal")
  modal!: ElementRef; 

  // options with default values
modalOptions: ModalOptions = {
  placement: 'center',
  backdrop: 'dynamic',
  backdropClasses:
      'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  closable: false
};

// instance options object
modalInstanceOptions = {
id: 'feedback-modal',
override: true
};

  constructor(private feedbackService: FeedbackService) {
  }

  onSubmit(): void {
   const name = this.form.get('name')?.value;
   const feedbackType = this.form.get('feedbackType')?.value;
   const feedback = this.form.get('feedback')?.value;
   const modal = new Modal(this.modal.nativeElement, this.modalOptions, this.modalInstanceOptions);
   modal.show();

   this.feedbackService.sendFeedback({name, feedbackType, feedback});
  }

  hideModal() {
    const modal = new Modal(this.modal.nativeElement, this.modalOptions, this.modalInstanceOptions);
    modal.hide();
  }
}
