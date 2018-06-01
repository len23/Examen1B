import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraTiendaComponent } from './cabecera-tienda/cabecera-tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraTiendaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
