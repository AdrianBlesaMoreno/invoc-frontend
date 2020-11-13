import { Component, Input, OnInit } from '@angular/core';
import { Dashpane } from '../../models/dashpane.model';
import { FieldConfig } from '../../models/field-config';
import { RequestFilter } from '../../models/request-filter';

@Component({
  selector: 'app-table-pane',
  templateUrl: './table-pane.component.html',
  styleUrls: ['./table-pane.component.scss']
})
export class TablePaneComponent implements OnInit {

  @Input() config: any;
  data: any;

  requestFilter: RequestFilter;
  tableConfig: FieldConfig[] = [];
  permisos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = this.config.data;

    this.tableConfig = [
      {field: 'codigo', nombre: 'Codigo', sort: true, filter: true},
      {field: 'descripcion', nombre: 'Descripción', sort: true, filter: true}
    ];

    this.requestFilter = {
      size: 5,
      page: 0,
      sort: [],
      filter: []
    };
  }

  getAll(): void{}

  onClick(event): void{
    console.log(event);
  }

}
