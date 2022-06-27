import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardTrigger = trigger('cardTrigger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate(
          200,
          style({
            opacity: 1,
            right: '100%',
          })
        ),
      ]),
      animate(500)
    ],{ optional: true }),
  ]),
]);
