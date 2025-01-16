import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class UserTasks {

  users=DUMMY_USERS;
  
  @Input({required:true}) name!:string;




  
}
