import { Component, Input, OnInit } from '@angular/core';
import { Dashpane } from '../../models/dashpane.model';

@Component({
  selector: 'app-overview-pane',
  templateUrl: './overview-pane.component.html',
  styleUrls: ['./overview-pane.component.scss']
})
export class OverviewPaneComponent implements OnInit {

  @Input() config: any;

  constructor() { }

  ngOnInit(): void {
  }

}
