import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { slideIn, slideOut } from './carousel.animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(slideIn)]),
      transition('* => void', [useAnimation(slideOut)])
    ])
  ]
})
export class CarouselComponent {
  @Input() slides: any;

  currentSlide = 0;
  slideInLocation = -100;
  slideOutLocation = 100;

  toggleAnimationDirection() {
    this.slideInLocation *= -1;
    this.slideOutLocation *= -1;
  }

  onSwipe(event: any) {
    const x =
      Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
    const y =
      Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';

    if (x == 'Right') {
      this.onRightSwipe();
    } else if (x == 'Left') {
      this.onLeftSwipe();
    }

  }

  onLeftSwipe() {
    if (this.slideInLocation < 0) {
      this.toggleAnimationDirection();
    } 
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onRightSwipe() {
    if (this.slideInLocation > 0) {
      this.toggleAnimationDirection();
    } 
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
