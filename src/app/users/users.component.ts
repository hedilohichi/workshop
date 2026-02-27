import {Component, OnInit} from '@angular/core';
import {RouterOutlet, RouterModule} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  standalone: true,
  imports: [RouterOutlet, RouterModule]
})
export class UsersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


}
