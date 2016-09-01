import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title.name }} - {{ title.description }}</h1>
    <input type="text" [ngModel]="title.name" />
    <input type="text" [(ngModel)]="title.description" />`
})
export class AppComponent {
    title = {
        name: "Hello guys!",
        "description":"descrição qualquer"
}