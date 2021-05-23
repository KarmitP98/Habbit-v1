import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { MatMenuModule } from '@angular/material/menu';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatRippleModule } from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RewardCardComponent } from './components/reward-card/reward-card.component';
import { HabittScorePageComponent } from './pages/habitt-score-page/habitt-score-page.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { RewardsComponent } from './pages/rewards/rewards.component';

@NgModule( {
             declarations: [
               AppComponent,
               PageNotFoundComponent,
               LoginComponent,
               SignupComponent,
               HomeComponent,
               LeftSideBarComponent,
               RightSideBarComponent,
               TopBarComponent,
               RewardCardComponent,
               HabittScorePageComponent,
               SnackbarComponent,
               RewardsComponent,
             ],
             imports: [
               BrowserModule,
               AppRoutingModule,
               NgbModule,
               BrowserAnimationsModule,
               FormsModule,
               MatButtonModule,
               MatCheckboxModule,
               MatToolbarModule,
               MatIconModule,
               MatProgressBarModule,
               MatMenuModule,
               MatCardModule,
               AngularFireModule.initializeApp( environment.firebaseConfig ),
               MatInputModule,
               MatRippleModule,
               MatTableModule,
               MatPaginatorModule,
             ],
             providers: [],
             bootstrap: [ AppComponent ],
           } )
export class AppModule {
}
