import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInput} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';



import { AppComponent } from './app.component';
import { CabeceraTiendaComponent } from './cabecera-tienda/cabecera-tienda.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { DetallesTiendaComponent } from './detalles-tienda/detalles-tienda.component';
import { GrillasComponent } from './grillas/grillas.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import {MenuItem} from 'primeng/api';
import { CardComponent } from './card/card.component';
import { Tabla2Component } from './tabla2/tabla2.component';                 //api


@NgModule({
  declarations: [
    AppComponent,
    CabeceraTiendaComponent,
    CarrouselComponent,
    DetallesTiendaComponent,
    GrillasComponent,
    DetallesProductoComponent,
    CardComponent,
    Tabla2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    AccordionModule,
    FormsModule,
    InputTextModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
