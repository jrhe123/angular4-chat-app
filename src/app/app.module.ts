// Default modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Router module
import { RouterModule } from '@angular/router';
// Firebase module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Components
import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';


// Services
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';


// router
import { appRoutes } from '../routes';

// environment
import { environment } from '../environments/environment';



@NgModule({
  // Components
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Router
    RouterModule.forRoot(appRoutes),

    // Firebase
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  // Services
  providers: [
    ChatService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
