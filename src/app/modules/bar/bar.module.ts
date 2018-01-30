import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../common/components/components.module';
import { SharedModule } from '../../shared.module';
import { BarViewComponent } from './views/bar-view/bar-view.component';
import { BarDetailsComponent } from './views/bar-details/bar-details.component';
import { BAR_STATES } from './bar.states';

@NgModule({
  declarations: [
    BarViewComponent,
    BarDetailsComponent,
  ],
  imports: [
    UIRouterModule.forChild({
      states: BAR_STATES
    }),
    SharedModule,
    CommonModule,
    ComponentsModule
  ],
  exports: []
})
export class BarModule {
}
