import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { RoutesearchComponent } from './routesearch/routesearch.component';

@NgModule({

  declarations: [
    AppComponent,
    RoutesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, RoutesearchComponent] //RoutesearchComponent]
})
export class AppModule { }
