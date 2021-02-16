import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {RegisterFormComponent} from './components/login/register-form/register-form.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LineLoaderComponent} from './components/shared/line-loader/line-loader.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {HomeComponent} from './components/dashboard/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {CompanyCardComponent} from './components/dashboard/home/company-cards/company-card/company-card.component';
import {CompanyCardsComponent} from './components/dashboard/home/company-cards/company-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LineLoaderComponent,
    DashboardComponent,
    ToolbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    CompanyCardComponent,
    CompanyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
