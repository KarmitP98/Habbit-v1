import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Transactions {
  title: string;
  amount: string;
  reward: string;
  date: string;
}

const ELEMENT_DATA: Transactions[] = [
  {title: 'Rogers', amount: '$31.99', reward: '$31.99', date: 'Dec 21, 2020'},
  {title: 'Bell Inc.', amount: '$29.99', reward: '$29.99', date: 'Dec 25, 2020'},
  {title: 'Telus', amount: '$41.99', reward: '$41.99', date: 'Dec 29, 2020'},
  {title: 'Rogers', amount: '$31.99', reward: '$31.99', date: 'Jan 21, 2021'},
  {title: 'Bell Inc.', amount: '$29.99', reward: '$29.99', date: 'Jan 25, 2021'},
  {title: 'Telus', amount: '$41.99', reward: '$41.99', date: 'Jan 29, 2021'},
  {title: 'Rogers', amount: '$31.99', reward: '$31.99', date: 'Feb 21, 2021'},
  {title: 'Bell Inc.', amount: '$29.99', reward: '$29.99', date: 'Feb 25, 2021'},
  {title: 'Telus', amount: '$41.99', reward: '$41.99', date: 'Feb 29, 2021'},
];

@Component({
             selector: 'app-home',
             templateUrl: './home.component.html',
             styleUrls: ['./home.component.scss'],
           })
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['title', 'amount', 'reward', 'date'];
  dataSource = new MatTableDataSource<Transactions>(ELEMENT_DATA);

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}
