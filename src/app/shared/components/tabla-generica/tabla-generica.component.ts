import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { FieldConfig } from '../../models/field-config';
import { RequestFilter } from '../../models/request-filter';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent implements OnInit {

  @Input() entities: any[];
  @Input() loading: boolean;
  @Input() totalRecords: number;
  @Input() permisos: string[] = [];
  @Input() tableConfig: FieldConfig[] = [];
  @Input() requestFilter: RequestFilter;
  @Output() requestFilterChange: EventEmitter<RequestFilter> = new EventEmitter();

  @Output() loadAll: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-native
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  contienePermisos(permisos: string[]): boolean{
    let result = true;
    if (permisos){
      permisos.forEach(permiso => {
        result = result && this.permisos.includes(permiso);
      });
    }
    return result;
  }

  loadEntitiesLazy(event: LazyLoadEvent): void {
    const sort = [];
    event.multiSortMeta?.forEach(sortMeta => {
      sort.push({field: sortMeta.field, order: sortMeta.order < 0 ? 'desc' : 'asc'});
    });

    const filter = [];
    for (const [key, value] of Object.entries(event.filters)) {
      filter.push({field: key, value: value.value});
    }
    const requestFilter: RequestFilter = {
      size: event.rows,
      page: event.first / event.rows,
      filter,
      sort
    };
    this.requestFilterChange.emit(requestFilter);
    this.loadAll.emit();
  }

  buttonEvent(event: any): void{
    this.click.emit(event);
  }

}
