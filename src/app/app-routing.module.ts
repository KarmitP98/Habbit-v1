import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HabittScorePageComponent} from './pages/habitt-score-page/habitt-score-page.component';
import { LoginComponent } from './pages/login/login.component';
import {RewardsComponent} from './pages/rewards/rewards.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'score', component: HabittScorePageComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule( {
             imports: [ RouterModule.forRoot( routes ) ],
             exports: [ RouterModule ],
           } )
export class AppRoutingModule {
}
