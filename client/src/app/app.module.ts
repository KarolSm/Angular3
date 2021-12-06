import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GazetyComponent } from './components/gazety/gazety.component';
import { LataComponent } from './components/przefiltrowane/lata/lata.component';
import { DaneComponent } from './components/przefiltrowane/dane/dane.component';
import { PrzefiltrowaneComponent } from './components/przefiltrowane/przefiltrowane.component';

@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    DaneComponent,
    PrzefiltrowaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
