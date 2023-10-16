import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

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

  constructor(public userService: UserService) {}

  register() {
    const user = { email: this.email, password: this.password };
    console.log(this.password, this.confirmPassword);
    if (this.password === this.confirmPassword) {
    this.userService.register(user).subscribe((data: any) => {
      console.log(data);
    });
    }
  }
}
