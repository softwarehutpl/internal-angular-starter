import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { ComponentsModule } from './common/components/components.module';
import { ServicesModule } from './common/services/services.module';
import { UIRouterModule, UIView, RootModule } from '@uirouter/angular';
import { HomepageModule } from './modules/homepage/homepage.module';
import { routerConfigFn } from './router.config';
import { APP_STATES } from './app.states';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ComponentsModule,
    ServicesModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      config: routerConfigFn,
      otherwise: { state: 'notFound' }
    }),
    HomepageModule,
    AuthModule,
  ],
  providers: [{
    provide: NgModuleFactoryLoader,
    useClass: SystemJsNgModuleLoader
  }],
  bootstrap: [UIView]
})
export class AppModule {
}
