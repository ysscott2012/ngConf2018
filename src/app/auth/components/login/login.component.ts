import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Authenticate} from '../../models/authenticate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
    const auth = {
      username: 'admin',
      password: 'admin'
    } as Authenticate;
    this.authService.login(auth).subscribe(
      user => {
        console.log(user);
      }
    );
  }

  ngOnInit() {
  }

}
