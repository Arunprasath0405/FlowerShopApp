import { Component, NgModule, OnInit } from '@angular/core';
import { RedirectCommand, RouterOutlet } from '@angular/router';
import { DataserviceService } from './Services/dataservice.service';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavtopComponent,
    HomeComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private service: DataserviceService) {}
  title = 'push';
  public data: any;
  ngOnInit(): void {
    this.service.getdata().subscribe((data) => {
      this.data = data;
    });
    this.service.getdata().subscribe((data) => {
      console.log(data);
    });
  }
  get objectKeys(): (obj: any) => string[] {
    return Object.keys;
  }
}
