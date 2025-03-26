import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from '../services/characters/characters.service';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';  // Importe o CommonModule
import { CharactersCardComponent } from '../characters-card/characters-card.component';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  imports: [CommonModule, CharactersCardComponent]  
})
export class CharactersListComponent implements OnInit {
  characters$!: Observable<Character[]>;

  constructor(private personagemService: CharactersService) {}

  ngOnInit(): void {
    this.characters$ = this.personagemService.carregarPersonagens();
  }

  trackCharacter(index: number, character: Character): string {
    return character.name;
  }
}
