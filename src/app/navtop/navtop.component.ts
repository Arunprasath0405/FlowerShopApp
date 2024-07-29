import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navtop',
  standalone: true,
  imports: [],
  templateUrl: './navtop.component.html',
  styleUrl: './navtop.component.scss',
})
export class NavtopComponent {
  constructor(private router: Router) {}
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
