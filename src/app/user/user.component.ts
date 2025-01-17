import { Component,EventEmitter,Input, Output } from '@angular/core';

interface Users{
  id:string;
  name:string;
  avatar :string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 @Input({required:true}) user!: Users;
 
 @Output() select = new EventEmitter;

 @Input ({required:true}) selected!: boolean;

  get imagePath(){
    return 'users/' + this.user.avatar;
  }

  onSelectUsers(){
    this.select.emit(this.user.id);
  }
   
}
