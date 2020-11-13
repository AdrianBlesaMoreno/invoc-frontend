import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TablaGenericaComponent } from './tabla-generica.component';
import { ToastModule } from 'primeng/toast';
import { CampoComponent } from './campo/campo.component';


@NgModule({
  declarations: [
    TablaGenericaComponent,
    CampoComponent
  ],
  exports: [
    TablaGenericaComponent,
    CampoComponent
  ],
  imports: [
    PaginatorModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,

    CommonModule
  ]
})
export class TablaGenericaModule { }
