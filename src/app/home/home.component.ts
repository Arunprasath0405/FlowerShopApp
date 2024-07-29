import { Component } from '@angular/core';
import { DataserviceService } from '../Services/dataservice.service';
import { NavtopComponent } from '../navtop/navtop.component';
import { RedirectCommand, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavtopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
