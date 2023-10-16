import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;

  constructor(public userService: UserService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    if (this.password === this.confirmPassword) {
    this.userService.register(user).subscribe((data: any) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/login");
    });
    }
  }
}
