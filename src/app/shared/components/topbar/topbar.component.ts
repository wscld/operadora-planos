import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() prevRoute?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate([this.prevRoute]);
  }
}
