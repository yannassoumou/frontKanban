import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SectionComponent} from './section/section.component';
import {FormsModule} from '@angular/forms';
import {FichesComponent} from './fiches/fiches.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AjoutFicheComponent } from './ajout-fiche/ajout-fiche.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FichesComponent,
    SectionComponent,
    AjoutFicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
