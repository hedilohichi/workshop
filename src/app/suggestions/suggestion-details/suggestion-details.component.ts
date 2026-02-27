import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion.model';
import { SuggestionService } from '../../core/services/suggestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion?: Suggestion;
  id!: number;

  constructor(
    private actR: ActivatedRoute,
    private suggestionService: SuggestionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.actR.snapshot.params['id'];
    this.suggestionService.getSuggestionById(this.id).subscribe(data => {
      this.suggestion = data;
    });
  }

  delete() {
    if (!this.id) { return; }
    this.suggestionService.deleteSuggestion(this.id).subscribe(() => {
      this.router.navigate(['/suggestions']);
    });
  }

  edit() {
    this.router.navigate(['/suggestions/add', this.id]);
  }
}
