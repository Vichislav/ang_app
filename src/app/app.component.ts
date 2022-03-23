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


  users: User[] = [];

  constructor(private userService: UserService) {
      this.users = this.userService.getUsers();
  }

}
