import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {RegisterFormComponent} from './components/login/register-form/register-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {
    path: 'customer', component: LoginComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginFormComponent},
      {path: 'register', component: RegisterFormComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
