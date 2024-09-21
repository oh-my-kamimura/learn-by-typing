import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  constructor(private http: HttpClient) {};

  private sendInquiryUrl: string = '/app/inquiries';

  sendInquiry(inquiry: any): Observable<any> {
    return this.http.post(this.sendInquiryUrl, inquiry, { responseType: 'text' });
  }

}
