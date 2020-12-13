import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SectionModalComponent } from './section-modal/section-modal.component';
import { TaskModalComponent } from './task-modal/task-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor (private dialog: MatDialog) {}

  addSection() {
    const dialogRef = this.dialog.open(SectionModalComponent, {
      width: '300px',
      height: '150px',
      data: {},
    });
  }

  addTask() {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      height: '300px',
      data: {},
    });
  }
}
