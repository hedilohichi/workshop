import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProfileComponent} from './users/profile/profile.component';
import {SettingsComponent} from './users/settings/settings.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddSuggestionComponent } from './suggestions/add-suggestion/add-suggestion.component';
import { SuggestionDetailsComponent } from './suggestions/suggestion-details/suggestion-details.component';
import { SuggestionListComponent } from './suggestions/suggestion-list/suggestion-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'server', component: ServerComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: 'server', component: ServerComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  },
  {path: 'profile', component: ProfileComponent, data: {title1: 'bonjour, je suis le composant profile!!'}},
  {path: 'user/:id/:name', component: UserComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'login', loadChildren: () => import("./login/login.module").then(m => m.LoginModule)},
  {path: 'list', component: ListUsersComponent },
  {path: 'suggestions', component: SuggestionListComponent},
  {path: 'suggestions/add', component: AddSuggestionComponent},
  {path: 'suggestions/add/:id', component: AddSuggestionComponent},
  {path: 'suggestions/:id', component: SuggestionDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
