import {Component} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean;

  constructor(
    private router: Router
  ) {
    this.loading = true;
    this.checkRouterEvent();
  }

  /**
   * Checking router event to determine whether show loading icon
   * Loading icon shows from NavigationStart to NavigationEnd.
   */
  checkRouterEvent () {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

}
