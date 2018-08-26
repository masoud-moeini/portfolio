import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/sub-main/home/home.component';
import { AboutComponent } from './main/sub-main/about/about.component';
import { PortfolioComponent } from './main/sub-main/portfolio/portfolio.component';
import { ContactComponent } from './main/sub-main/contact/contact.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RecaptchaModule} from "angular-google-recaptcha";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LebdmwUAAAAABcIWBjTmsjEhRkm6TiWhIawpBU-',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
