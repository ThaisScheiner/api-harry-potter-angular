import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersListComponent], // Importando o CharactersListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-harry-potter-angular';
}
