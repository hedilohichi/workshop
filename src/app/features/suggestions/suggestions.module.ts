import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

@NgModule({
  declarations: [
    ListSuggestionComponent,
    SuggestionDetailComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }