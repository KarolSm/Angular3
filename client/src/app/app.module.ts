import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GazetyComponent } from './components/gazety/gazety.component';
import { LataComponent } from './components/filtered/lata/lata.component';
import { DaneComponent } from './components/filtered/dane/dane.component';
import { FilteredComponent } from './components/filtered/filtered.component';

@NgModule({
  declarations: [
    AppComponent,
    GazetyComponent,
    LataComponent,
    DaneComponent,
    FilteredComponent
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
