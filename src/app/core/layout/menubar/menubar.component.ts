import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  menus: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Facturas',
        items: [
          {
            label: 'Listar facturas',
            icon: 'pi pi-list',
            routerLink: ['/invoices']
          },
          {
            label: 'Crear factura',
            icon: 'pi pi-plus'
          }
        ]
      },
      {
        label: 'Proyectos',
        items: [
          {
            label: 'Listar proyectos',
            icon: 'pi pi-list',
          },
          {
            label: 'Crear proyecto',
            icon: 'pi pi-plus'
          }
        ]
      },
      {
        label: 'Gestión interna',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Clientes',
            items: [
              {
                label: 'Listar clientes',
                icon: 'pi pi-list',
              },
              {
                label: 'Crear cliente',
                icon: 'pi pi-plus'
              }
            ]
          },
          {
            label: 'Compañias',
            items: [
              {
                label: 'Listar compañias',
                icon: 'pi pi-list',
              },
              {
                label: 'Crear compañia',
                icon: 'pi pi-plus'
              }
            ]
          },
        ]
      }
    ];
  }

}
