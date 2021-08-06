import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/core/utils/constant';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})

export class DashboardContainerComponent implements OnInit {
  dashboardList = Constants.projectDashboard;
  constructor() { }

  ngOnInit(): void {
  }

}
