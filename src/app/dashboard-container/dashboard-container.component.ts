import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/core/utils/constant';
import { number } from '../utility/svg-icon/svg-icon';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  dashboardList = Constants.projectDashboard;
  constructor() { }
  isLoaded: boolean[] = [true,false,false,false];
    loadIframe(number: any){
      this.isLoaded[number]=true;
    }
  ngOnInit(): void {

  }
}
