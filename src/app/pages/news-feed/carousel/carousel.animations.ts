import {
    style,
    animate,
    animation,
    keyframes
  } from "@angular/animations";

  // =========================
  // Slide
  // =========================
  export const slideIn = animation([
    style({ opacity: 0, transform: 'translate3d({{slideInLocation}}%, 0, 0)' }), // start state
    animate('300ms', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }))
  ]);
  
  export const slideOut = animation([
    animate('300ms', style({ opacity: 0, transform: 'translate3d({{slideOutLocation}}%, 0, 0)' }))
  ]);
