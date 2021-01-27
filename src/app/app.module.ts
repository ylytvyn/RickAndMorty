import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodesWindowComponent } from './components/episodes-window/episodes-window.component';
import { FilterCharactersComponent } from './components/filter-characters/filter-characters.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    EpisodesWindowComponent,
    FilterCharactersComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    EpisodesWindowComponent,
    AlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
