import { Component, Input } from '@angular/core';
import { Text } from '../../models/interfaces';

@Component({
  selector: 'text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss']
})
export class TextMessageComponent {
  @Input()
  text!: Text;

  showAdditionalOptions = false;

  toggleAdditionalOptions() {
    this.showAdditionalOptions = !this.showAdditionalOptions;
  }

  upvote() {
    console.log("Upvote clicked");
  }

  downvote() {
    console.log("Downvote clicked");
  }

  comment() {
    console.log("Comment clicked");
  }
}
