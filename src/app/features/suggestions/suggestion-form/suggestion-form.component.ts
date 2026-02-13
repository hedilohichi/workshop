import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { ListSuggestionComponent } from '../list-suggestion/list-suggestion.component';
import { SUGGESTIONS } from '../../../data/mock-suggestions';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.suggestionForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[A-Z][a-zA-Z]*$')
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(30)
        ]
      ],
      category: ['', Validators.required],
      date: [{ value: new Date().toISOString().split('T')[0], disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      // Get the next ID (simple implementation - should use a service in real app)
      const nextId = Math.max(...(window as any).suggestionsData?.map((s: Suggestion) => s.id) || [0]) + 1;
      
      const newSuggestion: Suggestion = {
        id: nextId,
        title: this.suggestionForm.get('title')?.value,
        description: this.suggestionForm.get('description')?.value,
        category: this.suggestionForm.get('category')?.value,
        date: new Date(this.suggestionForm.get('date')?.value),
        status: 'en attente',
        nbLikes: 0
      };

      // Add to list (you should use a service for this)
      SUGGESTIONS.push(newSuggestion);
      // For now, we'll just navigate back
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }
  }

  get title() {
    return this.suggestionForm.get('title');
  }

  get description() {
    return this.suggestionForm.get('description');
  }

  get category() {
    return this.suggestionForm.get('category');
  }
}