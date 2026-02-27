import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ListUsersComponent implements OnInit{

  list! : User[];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data : User[])=> {
      this.list = data;
    });


  
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.list = this.list.filter(u => u.id !== user.id);
    });
  }}
