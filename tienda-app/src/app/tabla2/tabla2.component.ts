import { Component, OnInit,Input } from '@angular/core';
import { Producto } from '../Producto';
import { PRODUCTOS } from '../mock-productos';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
  @Input() producto:Producto;
  productos = PRODUCTOS;
  constructor() { }

  ngOnInit() {
  }

  aumentarProductos(producto:Producto){
    this.productos.push(producto);
    console.log(this.productos)
  }

}
