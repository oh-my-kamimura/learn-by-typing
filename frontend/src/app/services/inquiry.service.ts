import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  constructor(private http: HttpClient) {};

  private sendInquiryUrl: string = environment.apiUrl + '/inquiries';

  sendInquiry(inquiry: any): Observable<any> {
    return this.http.post(this.sendInquiryUrl, inquiry, { responseType: 'text' });
  }

}
