import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlmanagerService } from '../../../urlmanager.service';
import { Observable } from 'rxjs';
import { RegisterModel } from '../../register/register.model';
import { response } from 'express';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private url: UrlmanagerService) {}
  registerUser(model: RegisterModel) {
    this.http.post(this.url.getUrl() + 'register', this.registerUser);
    console.log(response);
    return response;
  }
}
