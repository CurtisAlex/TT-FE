import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { UploadConversationComponent } from './pages/upload-conversation/upload-conversation.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news-feed',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'upload-conversation',
    component: UploadConversationComponent
  },
  {
    path: 'news-feed',
    component: NewsFeedComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
