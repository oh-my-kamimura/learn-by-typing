import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryService } from '../../../services/inquiry.service';
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
  protected isSent: boolean = false;
  protected isError: boolean = false;

  constructor(private fb: FormBuilder, private inquiryService: InquiryService) {
    this.inquiryForm = this.fb.group({
      subject: [''],
      email  : ['', [Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  sendInquiry() {
    if (this.inquiryForm.valid) {
      this.inquiryService.sendInquiry(this.inquiryForm.value).subscribe({
        next: (response) => {
          console.log('問い合わせが送信されました', response);
          this.isSent = true;
        },
        error: (error) => {
          console.error('送信エラー', error);
          this.isError = true;
        }
      });
    }
  }
}
