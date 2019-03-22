import { Component } from "@angular/core";
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angularRoutingApplication";
  loading = true;

  constructor(private _router:Router){
    _router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
      console.log('router event start');
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
          console.log('router event finish');
      this.loading = false;
    }
  }
}
