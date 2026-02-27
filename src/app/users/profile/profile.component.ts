import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true
})
export class ProfileComponent implements OnInit {

  title = "";

  constructor(private act: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = this.act.snapshot.data['title1'];
  }


}
