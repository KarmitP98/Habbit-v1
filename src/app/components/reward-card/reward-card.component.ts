import {Component, Input, OnInit} from '@angular/core';

@Component({
             selector: 'app-reward-card',
             templateUrl: './reward-card.component.html',
             styleUrls: ['./reward-card.component.scss']
           })
export class RewardCardComponent implements OnInit {

  @Input() data!: {
    imageUrl: string,
    name: string,
    amount: number,
    currencyType: '$',
    date: Date,
    linkURL: '',
    actions: any,
    showAction: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
