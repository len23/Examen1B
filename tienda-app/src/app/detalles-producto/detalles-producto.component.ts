import { Component, OnInit, Output,EventEmitter, Input, OnChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';                 //api
import {Producto} from '../Producto';
import {PRODUCTOS} from '../mock-productos'
import {Tienda} from '../tienda'

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit, OnChanges {
  @Input() tienda:Tienda;
  @Output() creado = new EventEmitter<Producto>();
  submitted = false;

  producto:Producto;/* = {  numeroProducto:null,
    nombre:' ',
    descripcion:' ',
    precio: null,
    fechaLanzamientoProducto: ' ',
    aniosGarantia: null,
    tiendaId:null /* this.tienda.tiendaId };*/

  constructor() { }

  ngOnInit() {
   
if(this.tienda.tiendaId==null){

      this.producto= {  numeroProducto:null,
        nombre:' ',
        descripcion:' ',
        precio: null,
        fechaLanzamientoProducto: ' ',
        aniosGarantia: null,
        tiendaId:null/* this.tienda.tiendaId */};
      }else{

        this.producto= {  numeroProducto:null,
          nombre:' ',
          descripcion:' ',
          precio: null,
          fechaLanzamientoProducto: ' ',
          aniosGarantia: null,
          tiendaId:this.tienda.tiendaId};
      }
    
  }

  ngOnChanges(){
    if(this.tienda){
      this.producto= {  numeroProducto:null,
        nombre:' ',
        descripcion:' ',
        precio: null,
        fechaLanzamientoProducto: ' ',
        aniosGarantia: null,
        tiendaId:this.tienda.tiendaId};
    }

  }


  btnLimpiarProd(){
    this.producto = {
      numeroProducto:null,
      nombre:' ',
      descripcion:' ',
      precio: null,
      fechaLanzamientoProducto: ' ',
      aniosGarantia: null,
      tiendaId:null /* this.tienda.tiendaId */
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
    tiendaId: this.tienda.tiendaId 
  }
  }


  get diagnostic() 
  {
     return JSON.stringify(this.producto); 
    }


}
