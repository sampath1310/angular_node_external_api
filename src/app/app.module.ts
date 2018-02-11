import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { CapsPipe } from './caps.pipe';
import { HomeComponent } from './home/home.component';
import { MydirDirective } from './mydir.directive';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CapsPipe,
    HomeComponent,
    MydirDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
