import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { TaskModalComponent } from './task-modal/task-modal.component';

import { MatInputModule } from '@angular/material/input';

import {A11yModule} from '@angular/cdk/a11y';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TaskModalComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //Angular Material
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,    
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
