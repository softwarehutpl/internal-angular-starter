import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/views/homepage/homepage.component';
import { FooViewComponent } from './modules/foo/views/foo-view/foo-view.component';
import { BarViewComponent } from './modules/bar/views/bar-view/bar-view.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LoginComponent } from './modules/auth/views/login/login.component';


export const APP_STATES = [
    { name: 'app', redirectTo: 'homepage', component: AppComponent },
    { parent: 'app', name: 'homepage', url: '/home', component: HomepageComponent },
    { parent: 'app', name: 'foo.**', url: '/foo', loadChildren: './modules/foo/foo.module#FooModule' },
    { parent: 'app', name: 'bar.**', url: '/bar', loadChildren: './modules/bar/bar.module#BarModule' },
    {
        parent: 'app',
        name: 'userDashboardHome.**',
        url: '/user-dashboard',
        loadChildren: './modules/user-dashboard/user-dashboard.module#UserDashboardModule'
    },
    { parent: 'app', name: 'login', url: '/login', component: LoginComponent },
    { name: 'notFound', url: '/404', component: NotFoundComponent },
    { name: 'default', url: '/', redirectTo: 'homepage' },
];
