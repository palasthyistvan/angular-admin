import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  static show(
    dialog: MatDialog,
    message: string,
    params?: { buttonText?: string; title?: string }
  ): MatDialogRef<DialogComponent, any> {
    return dialog.open(DialogComponent, {
      disableClose: true,
      data: { message: message, params: params },
    });
  }
}
