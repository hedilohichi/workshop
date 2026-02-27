import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion.model';
import { SuggestionService } from '../../core/services/suggestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddSuggestionComponent implements OnInit {
  suggestionForm!: FormGroup;
  id?: number;

  constructor(
    private suggestionService: SuggestionService,
    private router: Router,
    private actR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.suggestionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl(''),
      status: new FormControl('en attente'),
      nbLikes: new FormControl(0)
    });

    // if route has id parameter we are editing
    this.id = +this.actR.snapshot.params['id'];
    if (this.id > 0) {
      this.suggestionService.getSuggestionById(this.id).subscribe(data => {
        this.suggestionForm.patchValue(data);
      });
    }
  }

  onSave() {
    if (this.suggestionForm.invalid) {
      console.warn('form invalid, cannot save');
      return;
    }

    // build payload without id for add
    const base: Partial<Suggestion> = { ...this.suggestionForm.value };
    if (this.id && this.id > 0) {
      const suggestion: Suggestion = { ...(base as Suggestion), id: this.id };
      this.suggestionService.updateSuggestion(suggestion).subscribe(
        () => this.router.navigate(['/suggestions']),
        err => console.error('update failed', err)
      );
    } else {
      const suggestion: Suggestion = base as Suggestion;
      this.suggestionService.addSuggestion(suggestion).subscribe(
        () => this.router.navigate(['/suggestions']),
        err => console.error('add failed', err)
      );
    }
  }
}
