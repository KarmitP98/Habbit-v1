import {animate, state, style, transition, trigger} from '@angular/animations';

export const OpacityLeftTrigger = trigger('load',
                                   [
                                     state('void', style({
                                                           opacity: 0,
                                                           transform: 'translateX(-10px)'
                                                         }
                                           )
                                     ),
                                     transition('void <=> *', animate(200))
                                   ]);
