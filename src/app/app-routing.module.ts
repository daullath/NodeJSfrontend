import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about';
import { TeamComponent } from './team';
  
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
        {
          path: 'dashboard',
          component: DashboardComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'about',
          component: AboutComponent,
          canActivate: [AuthGuard]
        },
        {
            path: 'team',
            component: TeamComponent,
            canActivate: [AuthGuard]
          },
      ]
     },
    // { path: 'login', component: LoginComponent },
    // { path: 'dashboard', component: DashboardComponent},
    // { path: 'about', component: AboutComponent},
    // { path: 'team', component: TeamComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
    })
],
    exports: [RouterModule]
})
export class AppRoutingModule { }

  
