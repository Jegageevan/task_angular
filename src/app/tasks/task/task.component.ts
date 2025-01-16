import { Component, Input } from '@angular/core';

interface Users {
  id:string;
  name:string;
  avatar:string;
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() user? :Users

}
