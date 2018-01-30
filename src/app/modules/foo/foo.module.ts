import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UIRouterModule } from '@uirouter/angular';
import { FooViewComponent } from './views/foo-view/foo-view.component';
import { FOO_STATES } from './foo.states';

@NgModule({
  declarations: [
    FooViewComponent
  ],
  imports: [
    UIRouterModule.forChild({
      states: FOO_STATES
    }),
    SharedModule
  ],
  exports: []
})
export class FooModule {
}
