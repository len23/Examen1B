import { Component, OnInit, Input } from '@angular/core';
import {Tienda} from '../tienda';
@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.css']
})
export class GrillasComponent implements OnInit {
  @Input() tienda: Tienda;

  constructor() { }

  ngOnInit() {
  }

}
