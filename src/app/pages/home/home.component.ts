import { Component } from '@angular/core';
import { CharactersCardComponent } from '../../components/characters-card/characters-card.component';

@Component({
  selector: 'app-home',
  imports: [
    CharactersCardComponent
  ],
  standalone: true, 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
