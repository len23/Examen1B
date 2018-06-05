import { Component, OnInit,ViewChild } from '@angular/core';
import {Tienda} from '../tienda';
import {TIENDAS} from '../mock-tiendas';
import {GrillasComponent} from '../grillas/grillas.component'
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {

  @ViewChild('child2') childTwo:GrillasComponent;
  @ViewChild('child3') childThree:CardComponent;

  tiendas = TIENDAS;
  tiendaSeleccionada:Tienda;
  constructor() { }

  ngOnInit() {
  }

  tienda:Tienda ={nombres: '',
  direccion: '',
  fechaApertura:'',
  RUC: null,
  matriz: null};

  btnLimpiar(){
    this.tienda = {nombres: '',
      direccion: '',
      fechaApertura:'',
      RUC: null,
      matriz: null}
  }

  btnCrearTienda(){
    this.tiendas.push(this.tienda);
    this.tienda={nombres: '',
    direccion: '',
    fechaApertura:'',
    RUC: null,
    matriz: null};
    
  }

  onSelected(seleccion:boolean){
    this.tiendaSeleccionada = this.tiendas[0];
  }

  get diagnostic() 
  {
     return JSON.stringify(this.tienda); 
    }


 
 
}
