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
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AlertModule,  CarouselModule, DropdownModule} from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TechComponent,
    ArtworkComponent,
    ContactComponent,
    HomeComponent,
    MenuBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule,
    CarouselModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
