import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Tienda} from '../tienda';
import {TIENDAS} from '../mock-tiendas';

@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.css']
})
export class GrillasComponent implements OnInit {
  @Input() tienda: Tienda;
  @Output() seleccionado= new EventEmitter<boolean>();

  constructor() {
  
   }

  ngOnInit() {
  }

  btnMore(seleccion:boolean){
    this.seleccionado.emit(seleccion);
  }

}
