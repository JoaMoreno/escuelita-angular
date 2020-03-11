import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { Comunicacion1Component } from './components/comunicacion1/comunicacion1.component';
import { TogglerComponent } from './components/toggler/toggler.component';
import { LateralbarComponent } from './components/lateralbar/lateralbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    Comunicacion1Component,
    TogglerComponent,
    LateralbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
