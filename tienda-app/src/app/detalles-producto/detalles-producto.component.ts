import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';                 //api

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent  {



  text: string;

  disabled: boolean = true;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }


}
