/* istanbul ignore next */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() title = '';
  @Input() prevRoute?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // nada aqui
  }

  goBack(): void {
    this.router.navigate([this.prevRoute]);
  }
}
