import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '../../features/components/home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { OverviewPaneComponent } from '../../shared/dashpanes/overview-pane/overview-pane.component';
import { DragDropModule } from 'primeng/dragdrop';
import { TablaGenericaModule } from '../../shared/components/tabla-generica/tabla-generica.module';
import { TablePaneComponent } from 'src/app/shared/dashpanes/table-pane/table-pane.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'invoices', loadChildren: '../../features/components/invoices/invoices.module#InvoicesModule' },
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MenubarComponent,
    OverviewPaneComponent,
    TablePaneComponent,
  ],
  imports: [
    TablaGenericaModule,
    CommonModule,
    SharedModule,

    ChartModule,
    MenubarModule,
    DragDropModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
