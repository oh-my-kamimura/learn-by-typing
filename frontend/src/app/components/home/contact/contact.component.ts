import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lbt-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '/src/styles.scss'],
})
export class ContactComponent {

  protected inquiryForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.inquiryForm = this.fb.group({
      subject: [''],
      email  : ['', [Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  sendMessage() {
    if (this.inquiryForm.valid) {
      // TODO: ここでAPIを送信
      // this.messageService.sendMessage(this.inquiryForm.value)
      console.log(this.inquiryForm.value);
    } else {
      console.log('フォームが無効です');
    }
  }
}
