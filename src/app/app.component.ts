import { Component } from '@angular/core';
// import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test app';

  // constructor(private $state: StateService) {}
  constructor() {}

  // changeRoute() {
  //   this.$state.go('foo');
  // }
}
