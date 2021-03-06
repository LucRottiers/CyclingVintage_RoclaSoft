import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.scss']
})
export class TextDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
    ngOnInit() {}

    onCloseConfirm() {
      this.dialogRef.close('Confirm');
    }
    onCloseCancel() {
      this.dialogRef.close('Cancel');
    }

}
