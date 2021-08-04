import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/core/utils/constant';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  labels = Constants.LABELS.portfolio;
  constructor() { }

  ngOnInit(): void {
  }

}
