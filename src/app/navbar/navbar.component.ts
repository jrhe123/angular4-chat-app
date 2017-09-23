import { Component, OnInit } from '@angular/core';

// services
import { AuthService } from '../services/auth.service';

// 
import { Observable } from 'rxjs/Observable';

// libraries
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  userEmail: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if(user){
        this.userEmail = user.email;
      }
    })
  }

  logout() {
    this.authService.logout();
  }

}
