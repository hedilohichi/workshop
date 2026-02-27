import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CommonModule, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe]
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = "offline";
  allowServerCreation = false;
  serverCreation = "not created";
  serverName = "Server 1";
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];
  status!: FormControl;

  serverCreationStatus() {
    this.serverCreation = "created";
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  ngOnInit() {
    this.status = new FormControl('', Validators.required)
  }

}
