import { Component, OnInit } from '@angular/core';
import {Tienda} from '../tienda';

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {

  tienda:Tienda ={nombres: '',
  direccion: '',
  fechaApertura:'',
  RUC: null,
  matriz: null};

  tiendasArray:Tienda[];

  constructor() { }

  ngOnInit() {
  }

  btnLimpiar(){
    this.tienda = {nombres: '',
      direccion: '',
      fechaApertura:'',
      RUC: null,
      matriz: null}
  }

  btnGuardar(){
    

  }

  get diagnostic() 
  {
     return JSON.stringify(this.tienda); 
    }

 
 
}
