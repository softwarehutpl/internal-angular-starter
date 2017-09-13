import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test app';
  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  changeRoute() {
    this.router.navigateByUrl('/foo');
  }
}
