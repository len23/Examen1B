import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

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
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
