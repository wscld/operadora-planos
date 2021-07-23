/* istanbul ignore next */
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() title = '';
  @Input() prevRoute?: string;
  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  goBack(): void {
    this.router.navigate([this.prevRoute]);
  }
}
