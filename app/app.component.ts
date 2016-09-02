import {Component, Input} from '@angular/core';

var TASKS = [
    {id: 1, name: 'Tarefa 1'},
    {id: 2, name: 'Tarefa 2'},
    {id: 3, name: 'Tarefa 3'},
    {id: 4, name: 'Tarefa 4'}
];

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>
    <ul><li *ngFor="let t of tasks">{{ t.name }}</li></ul>`
})
export class AppComponent {
    title = "Hello guys!";
    
    tasks = TASKS;
}