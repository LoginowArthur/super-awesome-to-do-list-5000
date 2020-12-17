import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  constructor(public tasksService: TasksService, private dialog: MatDialog) {}

  onClickTask(taskIndex: number) {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      height: '275px',
      // data: {...this.tasksService.readTask(taskIndex), taskIndex: taskIndex, isEdit: true}
    });
  }

  onClickClose(taskIndex: number) {
    // this.tasksService.removeTask(taskIndex)
  }
}
