import { Component, OnInit,ViewChild } from '@angular/core';
import {Tienda} from '../tienda';
import {TIENDAS} from '../mock-tiendas';
import {GrillasComponent} from '../grillas/grillas.component'
import { CardComponent } from '../card/card.component';
import {Producto} from '../Producto';
import {Tabla2Component} from '../tabla2/tabla2.component';

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {

  @ViewChild(Tabla2Component) private tablaComponent: Tabla2Component;
  
  submitted = false;

  tiendas = TIENDAS;
  tiendaSeleccionada:Tienda;
  tiendaCreada:Tienda;
  productoCreado:Producto;
  contador:number;
  constructor() { }

  ngOnInit() {
   
  }

  tienda:Tienda ={nombres: '',
  direccion: '',
  fechaApertura:'',
  RUC: null,
  matriz: null,
tiendaId: null};

  btnLimpiar(){
    this.tienda = {nombres: '',
      direccion: '',
      fechaApertura:'',
      RUC: null,
      matriz: null,
    tiendaId:null}
  }

  btnCrearTienda(){
    this.tienda.tiendaId = this.tiendas.length +1;
    this.tiendaCreada=this.tienda;
    this.tiendas.push(this.tienda);
    this.tienda={nombres: '',
    direccion: '',
    fechaApertura:'',
    RUC: null,
    matriz: null,
  tiendaId:null};
    
    
  }

  onSelected(tienda:Tienda){
    this.tiendaSeleccionada = tienda;
  }

  onProductoCreado(producto:Producto){
    console.log(producto);
   this.tablaComponent.aumentarProductos(producto); 
   /* this.productoCreado=producto; */
  }

  get diagnostic() 
  {
     return JSON.stringify(this.tienda); 
    }


 
 
}
