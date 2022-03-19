import { Component } from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang_app';

  name?: string;
  age?: number;

  users: User[] = [];

  constructor(private userService: UserService) {
      this.users = this.userService.getUsers();
  }
  addUser(): void {
      if (this.name != null) {
        if (this.age != null) {
          this.users.push(new User(this.name, this.age))
        }
      }
    }
}
