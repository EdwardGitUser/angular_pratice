import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASEURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'; 

  constructor(private http: HttpClient) { }

    
  getData(): Observable<any> {
    return this.http.get(this.BASEURL);
  }
}
