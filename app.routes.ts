import {EmplistComponent} from './emplist/emplist.component';
import {DetailviewComponent} from './detailview/detailview.component';
import {RouterModule,Route} from '@angular/router';

const routes: Route[]=[
{path:"home",component:EmpllistComponent},
{path:"", component:EmpllistComponent},
{path:"/details/:name/:designation/:companyName",component:DetailviewComponent}
];

export const RoutesProvider = RouterModule.forRoot(routes);
