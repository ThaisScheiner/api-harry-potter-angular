import { Component } from '@angular/core';
import { SearchCharactersComponent } from '../../components/search-characters/search-characters.component';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';

@Component({
  selector: 'app-characters',
  imports: [
    CharactersListComponent,
    SearchCharactersComponent
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {

}
