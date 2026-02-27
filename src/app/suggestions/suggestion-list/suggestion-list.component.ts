import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion.model';
import { SuggestionService } from '../../core/services/suggestion.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestion[] = [];

  constructor(
    private suggestionService: SuggestionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // using HTTP to fetch from backend; fall back to static list if needed
    this.suggestionService.getSuggestions().subscribe(
      data => this.suggestions = data,
      err => {
        console.warn('unable to load from backend, using static list', err);
        this.suggestions = this.suggestionService.getSuggestionList();
      }
    );
  }

  viewDetails(s: Suggestion) {
    this.router.navigate(['/suggestions', s.id]);
  }

  deleteSuggestion(s: Suggestion) {
    if (!s.id) { return; }
    this.suggestionService.deleteSuggestion(s.id).subscribe(() => {
      this.suggestions = this.suggestions.filter(x => x.id !== s.id);
    });
  }

  like(s: Suggestion) {
    if (!s.id) { return; }
    const newCount = (s.nbLikes || 0) + 1;
    this.suggestionService.updateLikes(s.id, newCount).subscribe(updated => {
      s.nbLikes = updated.nbLikes;
    });
  }

  addNew() {
    this.router.navigate(['/suggestions/add']);
  }
}
