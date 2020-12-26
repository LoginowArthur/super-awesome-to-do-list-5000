import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {
  sectionIndex: number;
  sections = this.tasksService.getSections();

  taskForm = new FormGroup({
    section: new FormControl(this.data.section || this.tasksService.tasksList[1].section),
    title: new FormControl(this.data.task?.title || ``, [Validators.required]),
    description: new FormControl(this.data.task?.description || ``)
  })

  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {
    }

    onSelectionChange(sectionIndex: number): void {
      console.log(sectionIndex);
      this.sectionIndex = sectionIndex
    }

    onClickSave(): void {
      const taskData = {...this.taskForm.value}
      this.data.isEdit
      ? console.log({...{}, originalSectionIndex: this.data.sectionIndex, actualSelectionIndex: this.sectionIndex, taskIndex: this.data.taskIndex, ...this.taskForm.value})
      : this.tasksService.addTask(taskData);

      this.dialogRef.close();
    }

    onClickClose(): void {
      this.dialogRef.close();
    }
}
