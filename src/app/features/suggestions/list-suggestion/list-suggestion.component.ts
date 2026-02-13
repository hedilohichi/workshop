import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { RouterLink } from '@angular/router';
import { SUGGESTIONS } from '../../../data/mock-suggestions';


@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  
  suggestions: Suggestion[] = SUGGESTIONS;

  favorites: Suggestion[] = [];
  searchText: string = '';

  like(s: Suggestion) {
    s.nbLikes++;
  }

 AjouterFavoris(id : number) {
    alert("Ajouter aux favoris la suggestion avec l'id : " + id);
  }
}
