import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TaskModalComponent } from './task-modal/task-modal.component';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionModalComponent } from './section-modal/section-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskModalComponent,
    TasksListComponent,
    SectionModalComponent
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
    MatExpansionModule,
    // MatCardModule,
    MatListModule,
    MatSelectModule,
    A11yModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
