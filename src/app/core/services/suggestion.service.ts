import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../../models/suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  // static list used for the first part of the workshop
  private suggestionList: Suggestion[] = [
    {
      id: 1,
      title: 'Improve UI',
      description: 'Make the user interface responsive and modern',
      category: 'UI',
      date: new Date(),
      status: 'en attente',
      nbLikes: 0
    },
    {
      id: 2,
      title: 'Add authentication',
      description: 'Implement login/logout functionality',
      category: 'Security',
      date: new Date(),
      status: 'en attente',
      nbLikes: 0
    }
  ];

  // url for backend CRUD operations
  suggestionUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) { }

  // Part 1: return the local list
  getSuggestionList(): Suggestion[] {
    return this.suggestionList;
  }

  // Part 2: HTTP-based CRUD
  getSuggestions(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  getSuggestionById(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.suggestionUrl}/${id}`);
  }

  deleteSuggestion(id: number): Observable<any> {
    return this.http.delete(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.suggestionUrl, suggestion);
  }

  updateSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${suggestion.id}`, suggestion);
  }

  updateLikes(id: number, nbLikes: number): Observable<Suggestion> {
    // patch only the likes count
    return this.http.patch<Suggestion>(`${this.suggestionUrl}/${id}`, { nbLikes });
  }
}
