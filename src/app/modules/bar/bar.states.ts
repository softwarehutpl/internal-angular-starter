import { BarViewComponent } from './views/bar-view/bar-view.component';
import { BarDetailsComponent } from './views/bar-details/bar-details.component';

export const BAR_STATES = [
    { parent: 'app', name: 'bar', url: '/bar', component: BarViewComponent },
    { name: 'bar.details', url: '/:id', component: BarDetailsComponent },
];
