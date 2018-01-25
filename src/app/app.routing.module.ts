import { NgModule } from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
import { environment } from '../environments/environment';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { routerConfigFn } from './router.config';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/views/homepage/homepage.component';

const appStates = [
  { name: 'app', redirectTo: 'homepage', component: AppComponent },
  { parent: 'app', name: 'homepage', url: '/home', component: HomepageComponent },
  // { name: 'foo.**', url: '/foo', loadChildren: 'app/modules/foo/foo.module#FooModule' },
  // { name: 'bar.**', url: '/bar/:id', loadChildren: 'app/modules/bar/bar.module#BarModule' },
  // { name: 'notFound.**', url: '/404', loadChildren: 'app/modules/not-found/not-found.module#NotFoundModule' },
  { name: 'default', url: '', redirectTo: 'foo', pathMatch: 'full' },
  { name: 'otherwise', url: '**', redirectTo: 'notFound' },
];

@NgModule({
  declarations: [],
  imports: [
    UIRouterModule.forRoot({
      states: appStates,
      config: routerConfigFn
      // {enableTracing: !environment.production} // <-- debugging purposes only
    })
  ],
  exports: []
})
export class AppRoutingModule {
}

// export const appRoutingComponents = [];
