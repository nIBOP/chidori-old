import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from "./home/home.component";
import { MangaComponent } from './manga/manga.component';
import { MerchComponent } from './merch/merch.component';
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProfileComponent } from './profile/profile.component';
import { RanobeComponent } from './ranobe/ranobe.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"authentification", component: AuthComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"profile", component: ProfileComponent},
  {path:"manga", component: MangaComponent},
  {path:"ranobe", component: RanobeComponent},
  {path:"merch", component: MerchComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
