import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { PRODUCTOS } from '../mock-productos';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
  productos = PRODUCTOS;
  constructor() { }

  ngOnInit() {
  }

}
