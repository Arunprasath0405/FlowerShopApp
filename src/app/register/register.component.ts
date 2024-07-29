import { Component } from '@angular/core';
import { RegisterModel } from './register.model';
import { FormsModule, NgModel } from '@angular/forms';
import { RegisterService } from '../Services/Register/register.service';
import { RedirectCommand, RouterOutlet } from '@angular/router';
import { DataserviceService } from '../Services/dataservice.service';
import { NavtopComponent } from '../navtop/navtop.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  providers: [NgModel, RegisterService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private registerService: RegisterService) {}
  model: RegisterModel = {
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    password: '',
    confirmPassword: '',
  };
  onclick(event: any) {
    console.log(event);
  }
  onRegister() {
    if (this.model.password !== this.model.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.registerService.registerUser(this.model);
  }
}
