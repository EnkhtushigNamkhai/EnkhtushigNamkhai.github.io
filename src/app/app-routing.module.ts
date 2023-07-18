import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SweProjectsComponent } from './swe-projects/swe-projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: { animationState: 'routerFade' }
  },
  { path: 'about', component: AboutComponent },
  { path: 'art', component: ArtworkComponent },
  { path: 'tech', component: SweProjectsComponent},
  { path: 'tech/swe-projects', component: SweProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
