import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraTiendaComponent } from './cabecera-tienda/cabecera-tienda.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { DetallesTiendaComponent } from './detalles-tienda/detalles-tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraTiendaComponent,
    CarrouselComponent,
    DetallesTiendaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
