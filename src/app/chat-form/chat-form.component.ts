import { Component, OnInit } from '@angular/core';

// services
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;

  // register service
  constructor(
    private chat: ChatService
  ) { }

  ngOnInit() {
  }

  send(){
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event){
    // enter press
    if(event.keyCode === 13){
      this.send();
    }
  }

}
