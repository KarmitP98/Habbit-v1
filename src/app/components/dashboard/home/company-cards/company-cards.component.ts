import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-cards',
  templateUrl: './company-cards.component.html',
  styleUrls: ['./company-cards.component.scss']
})
export class CompanyCardsComponent implements OnInit {
  companyCards: { title: string, subText: string, logoUrl: string, link: string }[] = [
    {title: 'Rogers', subText: 'Rogers Mobile Company', logoUrl: 'assets/logo/Rogers/Promo-Facebook-Ad (Carousel).jpeg', link: ''},
    {title: 'Bell Inc.', subText: 'Bell Mobile Company', logoUrl: 'assets/logo/Bell/Promo-Facebook-Ad (Carousel).jpeg', link: ''},
    {title: 'Telus Inc.', subText: 'Telus Mobile Company', logoUrl: 'assets/logo/Telus/Promo-Facebook-Ad (Carousel).jpeg', link: ''},
    {title: 'Freedom Mobile', subText: 'Shaw Mobile Company', logoUrl: 'assets/logo/Freedom/Promo-Facebook-Ad (Carousel).jpeg', link: ''},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
