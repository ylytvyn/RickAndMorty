import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public message: string = '';

  constructor(
    public translate: TranslateService,
    private alert: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
    switch (this.data.status) {
      case 404:
        this.message = this.data.error.error;
        break;
      case 0:
        this.translate.get('MSG_SERVER_NOT_RESPONDING').subscribe((text: string) => this.message = text);
        break;
      default:
        this.translate.get('MSG_SOMETHING_WRONG').subscribe((text: string) => this.message = text);
        break;
    }
  }

  close(): void {
    this.alert.dismiss();
  }

}
