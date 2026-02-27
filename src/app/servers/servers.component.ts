import {Component} from '@angular/core';
import {ServerComponent} from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  standalone: true,
  imports: [ServerComponent]
})
export class ServersComponent {

}
