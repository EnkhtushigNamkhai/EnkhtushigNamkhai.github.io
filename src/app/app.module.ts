import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from '@coreui/angular';
import { SweProjectsComponent } from './swe-projects/swe-projects.component';
import { MiscComponent } from './misc/misc.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TechComponent,
    ArtworkComponent,
    ContactComponent,
    HomeComponent,
    SweProjectsComponent,
    MiscComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
