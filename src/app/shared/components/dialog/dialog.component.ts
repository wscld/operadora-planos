/* istanbul ignore next */
import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log.model';
import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  display: boolean = false;
  log?: Log;
  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.dialogService.obterDialogs().subscribe((log: Log) => {
      this.log = log;
      this.display = true;
    });
  }

}
