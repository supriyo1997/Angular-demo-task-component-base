import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selecetedUser=DUMMY_USERS[randomIndex];

  // get imagePath()
  // {
  //   return 'users/' + this.selecetedUser.avatar;
  // }

  // onSelectUser()
  // {
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  //   this.selecetedUser = DUMMY_USERS[randomIndex];

  // }



  @Input({required:true}) user!:User;
  @Input({required:true}) selected!: boolean;

  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.user.id);

  }
  get imagePath() {
    return 'users/' + this.user.avatar;
  }
}
