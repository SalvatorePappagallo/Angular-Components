import { User, UserService } from './users/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ums';
  userService = inject(UserService)
  user = this.userService.getUser();

  onDeleteUser(user: User): void {
    this.userService.deleteUser(user);
    this.user = this.userService.getUser();
  }

  showUserForm(user: User): void {
    this.user = this.userService.getUser();
  }
}


