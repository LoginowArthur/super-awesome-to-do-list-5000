import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-section-modal',
  templateUrl: './section-modal.component.html',
  styleUrls: ['./section-modal.component.scss']
})
export class SectionModalComponent implements OnInit {

  sectionForm = new FormGroup({
    sectionName: new FormControl(this.data.title, [Validators.required]),
  })

  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<SectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onClickSave() {

  }

  onClickClose() {
    this.dialogRef.close();
  }

}
