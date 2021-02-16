import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  @Input() info: { title: string; subText: string; logoUrl: string; link: string; } | any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
