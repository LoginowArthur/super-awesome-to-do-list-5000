import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: any[] = [];

  readTask(taskIndex: number) {
    return this.tasks[taskIndex]
  }

  addTask(task: any) {
    this.tasks = [...this.tasks, task]
  }

  removeTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }

  editTask(taskIndex: number, task: any) {
    this.tasks[taskIndex] = task;
  }
}
