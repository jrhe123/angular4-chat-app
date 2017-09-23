import { Component, OnInit, OnChanges } from '@angular/core';

// libraries
import { FirebaseListObservable } from 'angularfire2/database';

// service
import { ChatService } from '../services/chat.service';

// 
import { Observable } from 'rxjs/Observable';

// models
import { ChatMessage } from '../models/chat-message.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(
    private chat: ChatService,
  ) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges(){
    this.feed = this.chat.getMessages();
  }

}
