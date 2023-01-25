import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Enki';

  // prepareRoute(outlet: RouterOutlet) {
  //   if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  //   return
  // }
}
