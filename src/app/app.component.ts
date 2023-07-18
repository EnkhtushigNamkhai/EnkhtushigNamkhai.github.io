import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

export const routerFade = trigger('routerFade', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0, })),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerFade]
})
export class AppComponent {
  title = 'Enki';

  constructor () {
   
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
