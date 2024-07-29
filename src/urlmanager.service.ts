import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlmanagerService {
  public API = 'https://localhost:7135/api/';
  constructor() {}
  getUrl() {
    return this.API;
  }
}
