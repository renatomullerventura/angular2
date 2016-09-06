"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TASKS = [
    { id: 1, name: 'Tarefa 1' },
    { id: 2, name: 'Tarefa 2' },
    { id: 3, name: 'Tarefa 3' },
    { id: 4, name: 'Tarefa 4' }
];
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Hello guys!";
        this.tasks = TASKS;
    }
    AppComponent.prototype.onClick = function (task) {
        this.title = 'Colocando tarefa "' + task.name + '" na lista de coisas a fazer!';
        this.selectedTask = task;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{ title }}</h1>\n    <ul>\n        <li *ngFor=\"let t of tasks\" (click)=\"onClick(t)\">{{ t.id }} - {{ t.name }}</li>\n    </ul>\n    <div *ngIf=\"selectedTask\">\n        <input type=\"text\" [(ngModel)]=\"selectedTask.name\" />\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map