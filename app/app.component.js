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
var task_edit_component_1 = require('./task-edit.component');
var task_service_1 = require('./task-service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.title = "Lista de tarefas!";
        this.tasks = this.taskService.getTasks();
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 [id]=\"title\">{{ title }}</h1>\n    <ul>\n        <li *ngFor=\"let t of tasks\" (click)=\"onClick(t);title='Hora de '+t.name\">{{ t.id }} - {{ t.name }}</li>\n    </ul>\n    <task-edit [task]=\"selectedTask\"></task-edit>\n    ",
            directives: [task_edit_component_1.TaskEditComponent],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map