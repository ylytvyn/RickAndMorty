import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public message: string = '';

  constructor(
    private alert: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
    switch (this.data.status) {
      case 404:
        this.message = this.data.error.error;
        break;
      case 0:
        this.message = 'Server is not responding';
        break;
      default:
        this.message = 'Something is going wrong';
        break;
    }
  }

  close(): void {
    this.alert.dismiss();
  }

}
