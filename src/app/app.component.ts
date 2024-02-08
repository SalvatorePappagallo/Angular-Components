import { User, UserService } from './users/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userCol = 12;
  formCol = 0;
  title = 'User Managment System';
  selectedUser: User | null = null;
  userService = inject(UserService)
  user = this.userService.getUser();

  onDeleteUser(user: User): void {
    this.userService.deleteUser(user);
    this.user = this.userService.getUser();
  }

  showUserForm(user: User): void {
    if (this.selectedUser != null){
      this.selectedUser = null;
      this.userCol = 12;
      this.formCol = 0;
    } else {
      this.selectedUser = { ...user }; //clonare un oggetto, oppure si può con Object.assign({}, user)
      this.userCol = 8;
      this.formCol = 4;
    }
  }

  onUserUpdate(user: User) {
     this.userService.updateUser(user);
     this.user = this.userService.getUser();
     this.selectedUser = null;//toglie le colonne del form dopo il "submit"
  }
}


