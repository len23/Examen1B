import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInput} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { CabeceraTiendaComponent } from './cabecera-tienda/cabecera-tienda.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { DetallesTiendaComponent } from './detalles-tienda/detalles-tienda.component';
import { GrillasComponent } from './grillas/grillas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraTiendaComponent,
    CarrouselComponent,
    DetallesTiendaComponent,
    GrillasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
