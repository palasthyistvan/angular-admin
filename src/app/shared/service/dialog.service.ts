import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/hotel-admin/hotel.model';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  alert(message: string, title?: string, buttonText?: string): Observable<any> {
    return DialogComponent.show(this.dialog, message, {
      buttonText: buttonText,
      title: title,
    }).afterClosed();
  }
}
