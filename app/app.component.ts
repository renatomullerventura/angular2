import {Component} from '@angular/core';
import {TaskEditComponent} from './task-edit.component';
import {Task} from './task';

var TASKS:Task[] = [
    {id: 1, name: 'Trabalhar'},
    {id: 2, name: 'Estudar'},
    {id: 3, name: 'Caminhar'},
    {id: 4, name: 'Dormir'}
];



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