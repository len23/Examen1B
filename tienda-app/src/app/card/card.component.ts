import { Component,OnInit,Input } from '@angular/core';
import {Tienda} from '../tienda'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() tienda:Tienda;
  constructor() { }

  ngOnInit() {
  }

}
