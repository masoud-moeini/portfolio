
import {animate, style, transition, trigger} from "@angular/animations";
export let fadeAnimation = trigger('fade',[
  transition(':enter',[
    style({opacity : 0}),
    animate('300ms ease-out')
  ]),
  transition(':leave',[
    style({opacity : 0}),
    animate(500)
  ])
])
