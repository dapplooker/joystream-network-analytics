import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Constants } from "src/core/utils/constants";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  labels = Constants.LABELS.footerArea;
  commonLabels = Constants.LABELS.commonLables;
  constantsURLs = Constants.URLs;
  errorLabels = Constants.LABELS.errorMessages;
  constructor() { }

  ngOnInit(): void {
  }

}
