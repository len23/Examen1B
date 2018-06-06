import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Tienda } from '../tienda';
import {Carrusel} from '../carrousel'
import {TIENDAS} from '../mock-tiendas'

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit, OnChanges {
@Input() tiendaSeleccionada:Tienda;
@Input() tiendaCreada:Tienda;
tiendas=TIENDAS;
tiendaCarr:Carrusel;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.tiendaCreada){
    console.log('Agregando chuuuucha!!');
    this.tiendaCarr={
    tienda:this.tiendaCreada,
    urlImagen:'http://www.america-retail.com/static//2013/12/02-12-2013-Supermercado.jpg',
    altSlide:'First slide'
    }
    this.imagenesCarr.push(this.tiendaCarr);
  }
  }



imagenesCarr:Carrusel[]=[
  {
    tienda:this.tiendas[0],
    urlImagen:'http://i.eldiario.com.ec/fotos-manabi-ecuador/2009/supermaxi(1).jpg',
    altSlide:'First slide'

  },
  {
    tienda:this.tiendas[1],
    urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20KLJTvRBDlIbA9FYgj-fzoYFaFiSn-OxcKqjoQ4FjrAvqNFW',
    altSlide:'Second slide'

  },
  {
    tienda:this.tiendas[2],
    urlImagen: 'https://s.libertaddigital.com/2017/03/01/1920/1080/fit/leroy-merlin-fachada-2.jpg', 
    altSlide:'Third slide'

  }
];





}
