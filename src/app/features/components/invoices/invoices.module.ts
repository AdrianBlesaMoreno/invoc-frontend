import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: InvoiceComponent, pathMatch: 'full'},
  {path: 'modal/:id', component: InvoiceComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InvoicesModule { }
