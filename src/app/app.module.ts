import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { LogInComponent } from './pages/log-in/log-in.component';
import { UploadConversationComponent } from './pages/upload-conversation/upload-conversation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMessageComponent } from './pages/text-message/text-message.component';
import { ConversationComponent } from './pages/conversation/conversation.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/tea-time.reducer';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { CarouselComponent } from './pages/news-feed/carousel/carousel.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentComponent } from './pages/comments/comment/comment.component';
import { ReactionBarComponent } from './pages/news-feed/reaction-bar/reaction-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    UploadConversationComponent,
    TextMessageComponent,
    ConversationComponent,
    NewsFeedComponent,
    CarouselComponent,
    CommentsComponent,
    CommentComponent,
    ReactionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    HammerModule,
    StoreModule.forRoot({TeaTime: reducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
