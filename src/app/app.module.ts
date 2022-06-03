import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RanobeComponent } from './ranobe/ranobe.component';
import { MerchComponent } from './merch/merch.component';
import { MangaComponent } from './manga/manga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    HomeComponent,
    NotfoundComponent,
    ProfileComponent,
    AuthComponent,
    RanobeComponent,
    MerchComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
