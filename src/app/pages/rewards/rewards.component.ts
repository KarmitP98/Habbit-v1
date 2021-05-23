import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  rewards: {
    imageUrl?: string,
    name?: string,
    amount?: number,
    currencyType?: '$',
    date?: Date,
    linkURL?: '',
    actions?: any,
    showAction?: true
  }[] = [
    {name: 'Rogers Inc.',
      amount: 29.99,
      currencyType: '$',
      imageUrl: '../../../assets/logo/Rogers/Promo-Facebook-Ad (Carousel).jpeg'
    },
    {name: 'Bell Inc.',
      amount: 39.99,
      currencyType: '$',
      imageUrl: '../../../assets/logo/Bell/Promo-Facebook-Ad (Carousel).jpeg'
    },
    {name: 'Telus',
      amount: 79.99,
      currencyType: '$',
      imageUrl: '../../../assets/logo/Telus/Promo-Facebook-Ad (Carousel).jpeg'
    },
    {name: 'Freedom Mobile',
      amount: 19.99,
      currencyType: '$',
      imageUrl: '../../../assets/logo/Freedom/Promo-Facebook-Ad (Carousel).jpeg'
    },
    {name: 'Rogers',
      amount: 45.99,
      currencyType: '$',
      imageUrl: '../../../assets/logo/Rogers/Promo-Facebook-Ad (Carousel).jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
