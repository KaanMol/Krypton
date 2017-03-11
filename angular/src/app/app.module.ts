import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './auth/login/login.component';
import { routing } from "./app.router";
import { ErrorComponent } from './error/error.component';
import { MockupsComponent } from './mockups/mockups.component';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MockupsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
