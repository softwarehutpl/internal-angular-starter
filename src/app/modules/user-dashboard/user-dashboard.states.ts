import { requiresAuthHook } from '../../common/hooks/auth.hook';
import { UserDashboardHomeComponent } from './views/user-dashboard-home/user-dashboard-home.component';


export const USER_DASBOARD_STATES = [
    {
        parent: 'app',
        name: 'userDashboardHome',
        url: '/user-dashboard',
        component: UserDashboardHomeComponent,
        data: {
            requiresAuth: true
        }
    },
];
