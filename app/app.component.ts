import {Component, Input} from '@angular/core';

var TASKS:Task[] = [
    {id: 1, name: 'Tarefa 1'},
    {id: 2, name: 'Tarefa 2'},
    {id: 3, name: 'Tarefa 3'},
    {id: 4, name: 'Tarefa 4'}
];

export class Task{
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <ul>
        <li *ngFor="let t of tasks" (click)="onClick(t)">{{ t.id }} - {{ t.name }}</li>
    </ul>
    <div *ngIf="selectedTask">
        <input type="text" [(ngModel)]="selectedTask.name" />
    </div>
    `
})
export class AppComponent {
    
    title = "Hello guys!";
    tasks:Task[] = TASKS;
    selectedTask:Task;
    
    onClick(task){
        this.title = 'Colocando tarefa "'+task.name+'" na lista de coisas a fazer!';
        this.selectedTask = task;
    }
    
}