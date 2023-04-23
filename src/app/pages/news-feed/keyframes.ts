import { keyframes, style } from "@angular/animations";

export const slideInLeft = [
    style({transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0}),
    style({transform: 'translate3d(0, 0, 0)', offset: 1}),
];

export const slideInRight = [
    style({transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0}),
    style({transform: 'translate3d(0, 0, 0)', offset: 1}),
];

export const slideOutLeft = [
    style({transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden', offset: 1}),
];

export const slideOutRight = [
    style({transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({transform: 'translate3d(100%, 0, 0)', visibility: 'hidden', offset: 1}),
];