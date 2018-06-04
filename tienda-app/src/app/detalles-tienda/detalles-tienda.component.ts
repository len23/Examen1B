import { Component, OnInit } from '@angular/core';
import {Tienda} from '../tienda';

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  tienda:Tienda ={nombres: '',
  direccion: '',
  fechaApertura:'',
  RUC: null,
  matriz: null};

  tiendasArray:Tienda[] = [];


  btnLimpiar(){
    this.tienda = {nombres: '',
      direccion: '',
      fechaApertura:'',
      RUC: null,
      matriz: null}
  }

  btnCrearTienda(){
    
    this.tiendasArray.push(this.tienda);
    console.log(this.tiendasArray);

  }

  get diagnostic() 
  {
     return JSON.stringify(this.tienda); 
    }

 
 
}
