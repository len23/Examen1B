import { Component, OnInit } from '@angular/core';
import {Tienda} from '../tienda';
import {TIENDAS} from '../mock-tiendas'

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {


  tiendas = TIENDAS;
  constructor() { }

  ngOnInit() {
  }

  tienda:Tienda ={nombres: '',
  direccion: '',
  fechaApertura:'',
  RUC: null,
  matriz: null};

  tiendasArray:Tienda[] = [];

   selectedTienda:Tienda = null;
   selectedTiendaArray:Tienda = null;
  btnLimpiar(){
    this.tienda = {nombres: '',
      direccion: '',
      fechaApertura:'',
      RUC: null,
      matriz: null}
  }

  btnCrearTienda(){
    
    this.tiendasArray.push(this.tienda);
    this.selectedTienda=this.tienda;
    
    
  }

  get diagnostic() 
  {
     return JSON.stringify(this.tienda); 
    }

    
  onSelect(tienda: Tienda): void {
    this.selectedTienda = tienda;
  }

 
 
}
