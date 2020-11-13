import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { InvoicesModule } from './features/components/invoices/invoices.module';
import { ClientListComponent } from './features/components/management/clients/client-list/client-list.component';
import { ClientModalComponent } from './features/components/management/clients/client-modal/client-modal.component';
import { CompanyListComponent } from './features/components/management/companies/company-list/company-list.component';
import { CompanyModalComponent } from './features/components/management/companies/company-modal/company-modal.component';
import { ProjectListComponent } from './features/components/projects/project-list/project-list.component';
import { ProjectModalComponent } from './features/components/projects/project-modal/project-modal.component';
import { IssueListComponent } from './features/components/projects/issues/issue-list/issue-list.component';
import { IssueModalComponent } from './features/components/projects/issues/issue-modal/issue-modal.component';

import { ChartModule } from 'primeng/chart';
import { StoreModule } from '@ngrx/store';
import { TablePaneComponent } from './shared/dashpanes/table-pane/table-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientModalComponent,
    CompanyListComponent,
    CompanyModalComponent,
    ProjectListComponent,
    ProjectModalComponent,
    IssueListComponent,
    IssueModalComponent,
  ],
  imports: [
    LayoutModule,
    InvoicesModule,

    ChartModule,

    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
