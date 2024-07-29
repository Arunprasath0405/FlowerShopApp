import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [NgModel],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  username: string = '';
  password: string = '';

  onLogin() {
    // Implement your login logic here
    console.log('Login clicked', this.username, this.password);
  }

  createAccount() {
    // Implement the create account logic here
    console.log('Create Account clicked');
  }

  forgotPassword() {
    // Implement the forgot password logic here
    console.log('Forgot Password clicked');
  }
}
