import { Component, OnInit, Type, Input } from '@angular/core';

export enum Tipo{
  TEXTO= 'TEXTO',
  FECHA= 'FECHA',
  FECHA_HORA= 'FECHA_HORA',
  ACTIVO= 'ACTIVO',
}

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.scss']
})
export class CampoComponent implements OnInit {

  @Input() dato: any;
  @Input() tipo: Tipo;
  tipos = Tipo;

  constructor() { }

  ngOnInit(): void {
  }

}
