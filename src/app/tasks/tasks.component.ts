import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() userId!:string ;
  @Input() name:string | undefined;
  isAddingTask = false;
  private tasksService: TasksService;

  constructor(tasksService:TasksService)
  {
    this.tasksService=tasksService;
  }



  get selectedUserTasks()
  {
    return this.tasksService.getUserTask(this.userId);
  }
  
  onStartAddTask()
  {
    this.isAddingTask=true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }

}
