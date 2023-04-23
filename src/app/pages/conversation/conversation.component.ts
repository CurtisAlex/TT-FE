import { Component, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Conversation } from 'src/app/models/interfaces';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  @Input()
  conversation!: Conversation;

  @Input()
  hideActionBar: boolean = false;


  toggleLike(event: MatButtonToggleChange) {
    if (event.source.checked) {
      this.conversation.likes++
    } else {
      this.conversation.likes--
    }
  }
}
