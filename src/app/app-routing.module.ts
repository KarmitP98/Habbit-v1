import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {RegisterFormComponent} from './components/login/register-form/register-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/dashboard/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {
    path: 'customer', component: LoginComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginFormComponent},
      {path: 'register', component: RegisterFormComponent}
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: '404'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
