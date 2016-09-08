import {Component} from '@angular/core';
import {TaskEditComponent} from './task-edit.component';
import {Task} from './task';
import {TASKS} from './task-data';

@Component({
    selector: 'my-app',
    template: `
    <h1 [id]="title">{{ title }}</h1>
    <ul>
        <li *ngFor="let t of tasks" (click)="onClick(t);title='Hora de '+t.name">{{ t.id }} - {{ t.name }}</li>
    </ul>
    <task-edit [task]="selectedTask"></task-edit>
    `,
    directives: [TaskEditComponent]
})
export class AppComponent {
    
    title = "Lista de tarefas!";
    tasks:Task[] = TASKS;
    selectedTask:Task;
    
    onClick(task){
        this.selectedTask = task;
    }
    
}