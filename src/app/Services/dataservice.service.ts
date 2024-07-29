import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlmanagerService } from '../../urlmanager.service';
@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(private http: HttpClient, private url: UrlmanagerService) {}
  getdata() {
    return this.http.get(this.url.getUrl() + 'flowers');
  }
}
