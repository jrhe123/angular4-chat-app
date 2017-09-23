import { Component, Input, OnInit } from '@angular/core';

// services
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';

// models
import { ChatMessage } from '../models/chat-message.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  //data from parent component
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthService) {
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    });
  }

  ngOnInit(chatMessage = this.chatMessage) {    
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
  }



}
