import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import {MatMenuModule} from "@angular/material/menu";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {MatCardModule} from "@angular/material/card";
import {FooterComponent} from "./components/footer/footer.component";
import {CompanyInfoComponent} from "./components/footer/company-info/company-info.component";
import {NavLinksComponent} from "./components/footer/nav-links/nav-links.component";
import {SocialLinksComponent} from "./components/footer/social-links/social-links.component";
import {ContactUsComponent} from "./components/footer/contact-us/contact-us.component";
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {MatRippleModule} from "@angular/material/core";
import {HomeComponent} from './components/home/home.component';
import {TopNavComponent} from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    CompanyInfoComponent,
    NavLinksComponent,
    SocialLinksComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    SideNavComponent,
    HomeComponent,
    TopNavComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
