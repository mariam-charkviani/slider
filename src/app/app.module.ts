import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { Slider1Component } from './slider1/slider1.component';

@NgModule({
  declarations: [
    AppComponent,
    Slider1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
