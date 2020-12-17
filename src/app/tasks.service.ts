import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksList: any[] = [
    {section: "to do", tasks: [
      {title: "section autocomplete", description: "add sections autocomplete to task modal"},
      {title: "add icons to tasks to edit or remove", description: "add sections to group similar tasks"},
      {title: "add autocomplete", description: "add sections to group similar tasks"},
    ]},
    {section: "very important", tasks: [{title: "pick up sasha", description: "pick her up before 6pm"}]},
    {section: "not so important", tasks: [{title: "do laundry", description: "remember not to use so much bleach this time"}]}
  ]

  getSections(): string[] {
    return this.tasksList.map(task => task.section)
  }

  addSection(sectionName: string): void {
    if (!this.getSections().includes(sectionName)) {
      this.tasksList = [...this.tasksList, {section: sectionName, tasksList: []}]
    }
  }

  removeSection(): void {

  }

  editSection(): void {

  }

  addTask(taskData: {section: string, title: string, description: string}) {
    console.log(taskData)
    const taskListSectionIndex = this.tasksList.map(task => task.section).indexOf(taskData.section);
    this.tasksList[taskListSectionIndex].tasks.push({title: taskData.title, description: taskData.description})
    console.log(this.tasksList)
  }

  // readTask(taskIndex: number) {
  //   return this.tasksList[taskIndex]
  // }

  // addTask(task: any) {
  //   this.tasksList = [...this.tasksList, task]
  // }

  // removeTask(taskIndex: number) {
  //   this.tasksList.splice(taskIndex, 1);
  // }

  // editTask(taskIndex: number, task: any) {
  //   this.tasksList[taskIndex] = task;
  // }
}
