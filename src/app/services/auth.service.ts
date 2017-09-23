import { Injectable } from '@angular/core';

// router
import { Router } from '@angular/router';

// libraries
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

// 
import { Observable } from 'rxjs/Observable';

// model
import { User } from '../models/user.model';


@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
  ) { 
    this.user = afAuth.authState;
  }


  // #1 Signup
  signUp(email: string, password: string, displayName: string){

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
              this.authState = user;

              const status = 'online';
              this.setUserData(email, displayName, status);
            })
            .catch(error => console.log(error));
  }

  setUserData(email: string, displayName: string, status: string): void{
    
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status,
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  get currentUserId(): string{
    return this.authState !== null ? this.authState.uid: '';
  }


  // #2 Login
  login(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user;
      this.setUserStatus('online');
      this.router.navigate(['chat']);
    });
  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserId}`;

    const data = {
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  // #3 Navbar
  authUser(){
    return this.user;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }


}
