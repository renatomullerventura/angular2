import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>
    <input type="text" value="{{ title }}" />`
})
export class AppComponent {
    title = "Hello guys!";
}