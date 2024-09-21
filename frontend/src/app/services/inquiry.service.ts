import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  constructor(private http: HttpClient) {};

  private sendInquiryUrl: string = '/app/inquiries';

  sendInquiry(inquiry: any) {
    return this.http.post(this.sendInquiryUrl, inquiry, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('問い合わせが送信されました', response);
      },
      error: (error) => {
        console.error('送信エラー', error);
      }
    })
  }

}
