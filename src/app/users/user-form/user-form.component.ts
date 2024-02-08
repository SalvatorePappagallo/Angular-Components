import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { User } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() user: Partial<User>= {};
  @Output() updateUser = new EventEmitter<User>

  //UserService = inject(UserService); O usiamo l'injector oppure il costruttore, come sotto
  constructor(private userService: UserService){

  }

  onSubmitForm(f: NgForm) {
    const userUpdated = {...f.value, id: this.user.id ?? 0};
    this.updateUser.emit(userUpdated);
    f.reset();//resetta il form dopo il "submit"
  }

}
