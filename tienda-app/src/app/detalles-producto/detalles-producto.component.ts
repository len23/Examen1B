import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';                 //api
import {Producto} from '../Producto';
import {PRODUCTOS} from '../mock-productos'

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent  {

  @Output() creado = new EventEmitter<Producto>();
  submitted = false;

  producto:Producto= {  numeroProducto:null,
    nombre:' ',
    descripcion:' ',
    precio: null,
    fechaLanzamientoProducto: ' ',
    aniosGarantia: null,
    tiendaId: null};

  constructor() { }

  ngOnInit() {
  }
  btnLimpiarProd(){
    this.producto = {
      numeroProducto:null,
      nombre:' ',
      descripcion:' ',
      precio: null,
      fechaLanzamientoProducto: ' ',
      aniosGarantia: null,
      tiendaId: null
    }
  }

  btnCrearProducto(creado:boolean){
   this.creado.emit(this.producto);
   this.producto= {
    numeroProducto:null,
    nombre:' ',
    descripcion:' ',
    precio: null,
    fechaLanzamientoProducto: ' ',
    aniosGarantia: null,
    tiendaId: null
  }
  }


  get diagnostic() 
  {
     return JSON.stringify(this.producto); 
    }


}
