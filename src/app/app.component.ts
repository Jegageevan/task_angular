import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { UserTasks } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, UserTasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId?:string;
  
  get selectedUser(){
    return this.users.find((users) => users.id === this.selectedUserId)!;
  }
  onSelectUser(id : string){
    this.selectedUserId = id;

  }

  diplay(){

  }
}
