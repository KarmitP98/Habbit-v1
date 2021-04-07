import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.scss"]
})
export class CompanyInfoComponent implements OnInit {

  missionStatement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt. Ornare arcu odio ut sem nulla pharetra diam sit amet. Enim facilisis gravida neque convallis a cras semper. Commodo nulla facilisi nullam vehicula ipsum.  ";

  constructor() {
  }

  ngOnInit(): void {
  }

}
