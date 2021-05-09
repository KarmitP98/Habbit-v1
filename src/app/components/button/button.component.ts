import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() onClick: any;
  @Input() onChange: any;
  @Input() arguments: any;
  @Input() type: any;
  @Input() style: any;
  @Input() class: any;

  args: any;

  constructor() {
  }

  ngOnInit(): void {
    this.args = this.arguments;
  }

}
