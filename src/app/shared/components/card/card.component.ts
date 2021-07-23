/* istanbul ignore next */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() subtitle2?: string;
  @Input() subtitle3?: string;
  @Input() subtitle4?: string;
  constructor() {
    // nada aqui
  }

  ngOnInit(): void {
    // nada aqui
  }

}
