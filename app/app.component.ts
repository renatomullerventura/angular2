import {Component, Input} from '@angular/core';

var TASKS:Task[] = [
    {id: 1, name: 'Trabalhar'},
    {id: 2, name: 'Estudar'},
    {id: 3, name: 'Caminhar'},
    {id: 4, name: 'Dormir'}
];

export class Task{
    id: number;
    name: string;
}

@Component({
    selector: 'task-edit',
    template: `
    <div *ngIf="task">
        <input type="text" [(ngModel)]="task.name" />
    </div>
    `
})
export class TaskEdit {
    @Input()
    task: Task;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <ul>
        <li *ngFor="let t of tasks" (click)="onClick(t)">{{ t.id }} - {{ t.name }}</li>
    </ul>
    <task-edit [task]="selectedTask"></task-edit>
    `,
    directives: [TaskEdit]
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