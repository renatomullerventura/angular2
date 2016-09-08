import {TASKS} from './task-data';
import {Task} from './task';

export class TaskService{
    getTasks():Task[]{
        return TASKS;
    }
}