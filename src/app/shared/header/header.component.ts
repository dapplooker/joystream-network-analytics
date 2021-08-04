import { Component, OnInit, TemplateRef } from '@angular/core';
import { Constants } from 'src/core/utils/constants';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  labels = Constants.LABELS.headerArea;
  commonLabels = Constants.LABELS.commonLables;
  constantsURLs = Constants.URLs;
  constructor( private readonly modalService: NgbModal,) { }

  ngOnInit(): void {
  }
  showMobileNav(mobileNav: TemplateRef<any>) {
    this.modalService.open(mobileNav, { size: "s" });
  }
}
