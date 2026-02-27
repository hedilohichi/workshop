import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent implements OnInit {

  user!: {
    id: number,
    name: string
  }

  constructor(private act: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      id: this.act.snapshot.params['id'],
      name: this.act.snapshot.params['name']
    }
  }
}
