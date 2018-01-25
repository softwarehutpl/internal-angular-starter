import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';


import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core.module';
import { ComponentsModule } from './common/components/components.module';
import { ServicesModule } from './common/services/services.module';
import { UIRouterModule, UIView } from '@uirouter/angular';
// import { HomepageModule } from './modules/homepage/homepage.module';
import { routerConfigFn } from './router.config';
import { HomepageComponent } from './modules/homepage/views/homepage/homepage.component';


const appStates = [
  { name: 'app', redirectTo: 'homepage', component: AppComponent },
  // { parent: 'app', name: 'welcome', url: '/welcome', component: WelcomeComponent },
  { parent: 'app', name: 'homepage', url: '/home', component: HomepageComponent },
  // { name: 'foo.**', url: '/foo', loadChildren: 'app/modules/foo/foo.module#FooModule' },
  // { name: 'bar.**', url: '/bar/:id', loadChildren: 'app/modules/bar/bar.module#BarModule' },
  // { name: 'notFound.**', url: '/404', loadChildren: 'app/modules/not-found/not-found.module#NotFoundModule' },
  // { name: 'default', url: '', redirectTo: 'foo', pathMatch: 'full' },
  // { name: 'otherwise', url: '**', redirectTo: 'notFound' },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // appRoutingComponents,
    // UIRouterModule,
    ComponentsModule,
    ServicesModule,
    UIRouterModule.forRoot({
      states: appStates,
      config: routerConfigFn,
      otherwise: { state: 'homepage' },
      // {enableTracing: !environment.production} // <-- debugging purposes only
    }),
    BrowserModule,
    // HomepageModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule {
}
