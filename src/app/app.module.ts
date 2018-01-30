import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { ComponentsModule } from './common/components/components.module';
import { ServicesModule } from './common/services/services.module';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { HomepageModule } from './modules/homepage/homepage.module';
import { routerConfigFn } from './router.config';
import { HomepageComponent } from './modules/homepage/views/homepage/homepage.component';
import { APP_STATES } from './app.states';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    ServicesModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      config: routerConfigFn,
      otherwise: { state: 'notFound' },
      // {enableTracing: !environment.production} // <-- debugging purposes only
    }),
    BrowserModule,
    HomepageModule,
    CoreModule,
  ],
  providers: [{
    provide: NgModuleFactoryLoader,
    useClass: SystemJsNgModuleLoader
  }],
  bootstrap: [UIView]
})
export class AppModule {
}
