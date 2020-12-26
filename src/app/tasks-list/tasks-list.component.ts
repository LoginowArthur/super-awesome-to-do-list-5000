import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { TasksService } from '../tasks.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  constructor(public tasksService: TasksService, private dialog: MatDialog) {}

  onClickTask(sectionIndex: number, taskIndex: number) {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      height: '275px',
      data: {
        sectionIndex: sectionIndex,
        section: this.tasksService.tasksList[sectionIndex].section, 
        taskIndex: taskIndex,
        task: this.tasksService.tasksList[sectionIndex].tasks[taskIndex], isEdit: true}
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  // onClickClose(taskIndex: number) {
  //   this.tasksService.removeTask(taskIndex)
  // }
}
