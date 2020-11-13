import { Component, OnInit } from '@angular/core';
import { DashpaneType } from 'src/app/shared/models/dashpane-type.enum';
import { Dashpane } from '../../../shared/models/dashpane.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashpanes: Dashpane[] = [];
  tempPanes: Dashpane[] = [];
  draggedPane: Dashpane;
  hoverPane: Dashpane;

  constructor() { }

  ngOnInit(): void {
    this.dashpanes = [
      {
        id: 1,
        column: 1,
        size: {
          width: 3,
          height: 1,

        },
        type: DashpaneType.OVERVIEW,
        config: {
          model: 2,
          title: 'Facturas',
          count: '132',
          icon: 'pi-file-o'
        }
     }, {
        id: 2,
        column: 2,
        size: {
          width: 2,
          height: 3,

        },
        type: DashpaneType.OVERVIEW,
        config: {
          model: 4,
          title: 'Horas',
          count: '12h 35m',
          icon: 'pi-clock'
        }
      }, {
        id: 3,
        column: 2,
        size: {
          width: 2,
          height: 2,

        },
        type: DashpaneType.OVERVIEW,
        config: {
          model: 3,
          title: 'Pendiente de facturar',
          count: '1200,00 €',
          icon: 'pi-dollar'
        }
      }, {
        id: 4,
        size: {
          width: 3,
          height: 2,
        },
        type: DashpaneType.DATA_TABLE,
        config: {
          data: [
            {
              codigo: '0001',
              descripcion: 'Codigo de prueba'
            },
            {
              codigo: '0002',
              descripcion: 'Codigo de prueba numero 2'
            }
          ]
        }
      }
    ];
  }

  dragStart(dashpane: Dashpane): void{
    this.tempPanes = [];
    this.dashpanes.forEach(val => this.tempPanes.push(Object.assign({}, val)));
    this.draggedPane = dashpane;
  }

  dragMoved(dashpane: Dashpane): void {
    this.hoverPane = dashpane;
  }

  dragExit(): void {
    this.hoverPane = null;
  }

  drop(dashpane: Dashpane): void {
    if (this.draggedPane){
      const draggedIndex = this.findIndex(this.draggedPane);
      const droppedIndex = this.findIndex(dashpane);

      [this.dashpanes[draggedIndex], this.dashpanes[droppedIndex]] = [this.dashpanes[droppedIndex], this.dashpanes[draggedIndex]];
    }
  }

  dragEnd(): void {
    this.draggedPane = null;
    this.hoverPane = null;
  }

  findIndex(dashpane: Dashpane): number {
    let index = -1;
    for (let i = 0; i < this.dashpanes.length; i++) {
        if (dashpane.id === this.dashpanes[i].id) {
            index = i;
            break;
        }
    }
    return index;
}

  getWidthClass(dashpane: Dashpane): string{
    let result = '';
    switch (dashpane.size.width){
      case 1: {
        result += ' p-col-12 p-md-6 p-lg-4 ';
        break;
      }
      case 2: {
        result += ' p-col-12 p-md-6 p-lg-6 ';
        break;
      }
      case 3: {
        result += ' p-col-12 p-md-12 p-lg-12 ';
        break;
      }
    }

    if (this.hoverPane?.id === dashpane.id){
      result += 'dropbox';
    }

    return result;
  }

  getHeightStyle(height: number): string{
    let result = '';
    switch (height){
      case 1: {
        result += 'height: 150px; ';
        break;
      }
      case 2: {
        result += 'height: 300px; ';
        break;
      }
      case 3: {
        result += 'height: 450px; ';
        break;
      }
      case 4: {
        result += 'height: 600px; ';
        break;
      }
    }

    return result;
  }

  get dashpanesColumn1(): Dashpane[] {
    return this.dashpanes.filter(d => d.column === 1 || !d.column);
  }

  get dashpanesColumn2(): Dashpane[] {
    return this.dashpanes.filter(d => d.column >= 2);
  }

}
