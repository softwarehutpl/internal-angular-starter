import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { UIRouterModule } from '@uirouter/angular';
import { NOT_FOUND_STATES } from './not-found.states';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    UIRouterModule.forChild({
      states: NOT_FOUND_STATES
    }),
  ],
  exports: [
    // RouterModule,
  ]
})
export class NotFoundModule {
}
