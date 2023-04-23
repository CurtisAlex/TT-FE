import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContextDetails, Conversation, Gender, Party, Relation, Text } from 'src/app/models/interfaces';
import { addNewConversation } from 'src/app/store/tea-time.actions';

import { RootState } from 'src/app/store/tea-time.reducer';

@Component({
  selector: 'upload-conversation',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './upload-conversation.component.html',
  styleUrls: ['./upload-conversation.component.scss']
})
export class UploadConversationComponent {
  Relations = Relation;
  Genders = Gender;

  textMessageForm = new FormGroup({
    message: new FormControl(''),
    isReciever: new FormControl(false)
  });

  conversationForm = new FormGroup({
    title: new FormControl(''),
    proposedText: new FormControl(''),
    nickName: new FormControl(''),
    relationToYou: new FormControl(null),
    gender: new FormControl(null),
    age: new FormControl(null),
    includeMyDetails: new FormControl(false),
    additionalDetails: new FormControl('') 
  });

  conversation: Conversation = {
    texts: [],
    likes: 0,
    proposedText: ''
  };

  dummyConversation: Conversation = {
    title: 'Fucking prick',
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
  }

  constructor(private store: Store<RootState>) {}

  submitNewText() {
    const message = this.textMessageForm.value.message;
    // const party = this.textMessageForm.value.partySelected;
    const isReciever = this.textMessageForm.value.isReciever;
    if (message
      && isReciever !== undefined && isReciever !== null
    ){

      this.conversation.texts.push(
        {
          message,
          party: isReciever ? Party.reciever : Party.sender
        } as Text
      )
    }
    this.textMessageForm.reset({
      message: '',
      isReciever: false
    });
  }

  uploadConversation() {
    console.log("Upload Conversation was clicked");
    const formValue = this.conversationForm.value;
    // upload conversation to the store
    this.conversation = {
      ...this.conversation,
      title: formValue.title ? formValue.title : undefined, // auto gen a title if one isn't provided
      context: this.createContextObject(),
      proposedText: formValue.proposedText ? formValue.proposedText : 'Fuck you'
    };
    console.log(JSON.stringify(this.conversation));
    this.store.dispatch(addNewConversation({ data: this.conversation }));
  }

  private createContextObject(): ContextDetails {
    const formValue = this.conversationForm.value;
    return {
      nickName: formValue.nickName ? formValue.nickName : undefined,
      relation: formValue.relationToYou ? formValue.relationToYou : undefined, // Todo, when selector has blank selected then don't add it to the object
      age: formValue.age ? formValue.age : undefined,
      gender: formValue.gender ? formValue.gender : undefined,
      additionalDetails: formValue.additionalDetails ? formValue.additionalDetails : undefined,
    }
  }
}
