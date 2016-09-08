import {Component, OnInit} from '@angular/core';
import {TaskEditComponent} from './task-edit.component';
import {Task} from './task';
import {TaskService} from './task-service';


@Component({
    selector: 'my-app',
    template: `
    <h1 [id]="title">{{ title }}</h1>
    <ul>
        <li *ngFor="let t of tasks" (click)="onClick(t);title='Hora de '+t.name">{{ t.id }} - {{ t.name }}</li>
    </ul>
    <task-edit [task]="selectedTask"></task-edit>
    `,
    directives: [TaskEditComponent],
    providers: [TaskService]
})
export class AppComponent implements OnInit{
    
    title = "Lista de tarefas!";
    selectedTask:Task;
    constructor(private taskService: TaskService){ }
    
    ngOnInit():any{
        this.getTasks();
    }
    getTasks():Task[]{
        return this.tasks = this.taskService.getTasks();
    }
    onClick(task){
        this.selectedTask = task;
    }
    
}