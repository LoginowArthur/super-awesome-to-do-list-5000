import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  sections: any[] = [
    {title: "new tasks", tasks: [
      {title: "add sections", description: "add sections to group similar tasks"},
      {title: "add icons to tasks to edit or remove", description: "add sections to group similar tasks"},
      {title: "add autocomplete", description: "add sections to group similar tasks"},
    ]},
    {title: "very important", tasks: [{title: "pick up sasha", description: "pick her up before 6pm"}]},
    {title: "not so important", tasks: [{title: "do laundry", description: "remember not to use so much bleach this time"}]}
  ]
  tasks: any[] = [];

  getSections(): string[] {
    return this.sections.map(section => section.title)
  }

  addSection(sectionName: string): void {
    this.sections = [...this.sections, {title: sectionName, tasks: []}]
  }

  removeSection(): void {

  }

  editSection(): void {

  }

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
