import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): User[] {
    return [
      new User ('Denis', 25),
      new User ('Olya', 24),
      new User ('Vanya', 27),
      new User ('Lili', 28),

    ];
  }

  constructor() { }
}
