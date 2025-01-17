import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



interface TaskType{title:string;summary:string;date:string;}

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTask {

  @Output() addTask = new EventEmitter<TaskType>();
  enteredTitle ='';
  enteredSummary ='';
  enteredDate ='';
 
@Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit()
  }
  
  onSubmit(){
  this.addTask.emit({title: this.enteredTitle, summary:this.enteredSummary,date:this.enteredDate});
  }
  
}
