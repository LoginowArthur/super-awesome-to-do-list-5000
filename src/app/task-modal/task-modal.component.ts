import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent  {
  taskForm = new FormGroup({
    taskName: new FormControl(this.data.title, [Validators.required]),
    taskDescription: new FormControl(this.data.description)
  })

  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    
    onClickSave(): void {
      const taskData = {
        title: this.taskForm.controls.taskName.value,
        description: this.taskForm.controls.taskDescription.value
      }
      
      this.data.isEdit
      ? this.tasksService.editTask(this.data.taskIndex, taskData)
      : this.tasksService.addTask(taskData);1

      this.dialogRef.close();
    }

    onClickClose(): void {
      this.dialogRef.close();
    }
}
