import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,},
  { path: 'about', component: AboutComponent },
  { path: 'artwork', component: ArtworkComponent },
  { path: 'tech', component: TechComponent },
  {path: 'contact', component: ContactComponent},
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
