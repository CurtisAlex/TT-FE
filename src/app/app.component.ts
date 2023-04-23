import { Component } from '@angular/core';
import { Conversation, Party } from './models/interfaces';
import { Store } from '@ngrx/store';
import { RootState } from './store/tea-time.reducer';
import { updateConversations } from './store/tea-time.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tea-time-app';

  lazyLoadConversations: Conversation[] = [
    {
      title: 'Fucking prick 1',
      texts: [
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.reciever },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.sender },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.sender },
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.sender },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.reciever },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.sender },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.reciever },
        { message: 'Mauris', party: Party.sender },
        { message: 'Aenean', party: Party.reciever },
      ],
      likes: 0,
      proposedText: 'Fuck that prick'
    },
    {
      title: 'Fucking prick 2',
      texts: [
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.reciever },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.sender },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.sender },
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.sender },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.reciever },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.sender },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.reciever },
        { message: 'Mauris', party: Party.sender },
        { message: 'Aenean', party: Party.reciever },
      ],
      likes: 0,
      proposedText: 'Fuck that prick'
    },
    {
      title: 'Fucking prick 3',
      texts: [
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.reciever },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.sender },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.sender },
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.sender },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.reciever },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.sender },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.reciever },
        { message: 'Mauris', party: Party.sender },
        { message: 'Aenean', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.sender },
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.sender },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.reciever },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.sender },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.reciever },
      ],
      likes: 0,
      proposedText: 'Fuck that prick'
    },
    {
      title: 'Fucking prick 4',
      texts: [
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.reciever },
        { message: 'Mauris', party: Party.sender },
        { message: 'Aenean', party: Party.reciever },
      ],
      likes: 0,
      proposedText: 'Fuck that prick'
    },
    {
      title: 'Fucking prick 5',
      texts: [
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.reciever },
        { message: 'Aliquam in leo et ligula elementum auctor.', party: Party.reciever },
        { message: 'Morbi id molestie velit. Aenean eget elementum nulla. Sed blandit justo eu mauris tincidunt sagittis. Nam sed dui sit amet ex ornare lacinia at in ligula.', party: Party.sender },
        { message: 'Mauris et rutrum odio, molestie hendrerit magna.', party: Party.reciever },
        { message: 'Aenean ligula mauris, imperdiet nec dui ac, semper laoreet justo. Curabitur elementum vel dui et accumsan.', party: Party.sender },
        { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis hendrerit lectus.', party: Party.sender },
        { message: 'Mauris', party: Party.sender },
        { message: 'Aenean', party: Party.reciever },
      ],
      likes: 0,
      proposedText: 'Fuck that prick'
    }
  ];

  constructor(private store: Store<RootState>) {
    this.store.dispatch(updateConversations({data: this.lazyLoadConversations}));
  }

}
