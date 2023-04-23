import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as kf from './keyframes';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/store/tea-time.reducer';
import { Observable, map, of, switchMap, take } from 'rxjs';
import { Conversation } from 'src/app/models/interfaces';
import { selectActiveConversation, selectActiveConversationId, selectConversations, selectNextActiveConversation, selectPrevActiveConversation, selectTeaTimeStore } from 'src/app/store/tea-time.selectors';
import { updateActiveConversationId } from 'src/app/store/tea-time.actions';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
  // animations: [
  //   trigger('cardAnimator', [
  //     transition('* => slideInRight', animate(1000, keyframes(kf.slideInRight))),
  //     transition('* => slideInLeft', animate(1000, keyframes(kf.slideInLeft))),
  //     transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight))),
  //     transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
  //   ])
  // ]
})
export class NewsFeedComponent {
  conversations$ = this.store.select(selectConversations).pipe(take(1), map(val => val));

  activeConversationId: number = 0;
  activeConversation$ = this.store.select(selectActiveConversation);
  prevActiveConversation$ = this.store.select(selectPrevActiveConversation);
  nextActiveConversation$ = this.store.select(selectNextActiveConversation);
  activeConversationId$ = this.store.select(selectActiveConversationId);

  constructor(private store: Store<RootState>) {}

  activeAnimationState: string = '';
  prevActiveAnimationState: string = '';
  nextActiveAnimationState: string = '';

  startAnimation(state: string) {
    console.log(state);
    if (!this.activeAnimationState) {
      this.activeAnimationState = state;
    }
  }

  resetAnimationState() {
    this.activeAnimationState = '';
  }

  direction = '';

  onSwipe(event: any) {
    const x =
      Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
    const y =
      Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';

    this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;

    if (x == 'Right') {
      console.log("Swiped Right");
      this.store.dispatch(updateActiveConversationId({ data: this.activeConversationId++ }));
      this.startAnimation('slideOutRight');
    } else if (x == 'Left') {
      console.log("Swiped Left");
      this.store.dispatch(updateActiveConversationId({ data: this.activeConversationId-- }));
      this.startAnimation('slideOutLeft');
    }

  }
}
