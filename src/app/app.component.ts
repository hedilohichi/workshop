import { Component } from '@angular/core';

// Import your standalone components
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

@Component({
  selector: 'app-root',
  standalone: true,  // important
  imports: [HeaderComponent, FooterComponent, ListSuggestionComponent], // <-- add these
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop1';
}
