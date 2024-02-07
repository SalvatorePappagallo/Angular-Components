import { Component, Input, input } from '@angular/core';
import { User } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() user: Partial<User>= {};

  onSubmitForm(form: NgForm) {

  }

}
