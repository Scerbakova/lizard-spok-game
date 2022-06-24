import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const rulesTrigger = trigger('rulesTrigger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(2000, [
        animate(
          1000,
          style({
            opacity: 1,
            position: 'fixed',
            right: '50%',
            top: '0%',
            transform: 'translate(50%)',
          })
        ),
      ]),
      animate(2000),
    ]),
  ]),
]);