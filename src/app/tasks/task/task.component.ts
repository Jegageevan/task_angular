import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Tasks {
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() tasks? :Tasks
  
  @Output() Complete = new EventEmitter<string>();

   onComplete(){
     this.Complete.emit(this.tasks?.id);
  }

}
