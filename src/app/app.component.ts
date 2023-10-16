import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public router: Router, public userService: UserService) {
  }

  ngOnInit(): void {
    if (this.userService.logged) this.router.navigateByUrl("/")
    else{
      this.router.navigateByUrl("/login")
    }
  }
  
}
