import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCharactersComponent } from '../search-characters/search-characters.component';
import { CharactersCardComponent } from '../characters-card/characters-card.component';
import { Character } from '../../models/character.model';
import { CharactersService } from '../services/characters/characters.service';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CommonModule,
    SearchCharactersComponent,
    CharactersCardComponent,
  ],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  personagens: Character[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private charactersService: CharactersService) {}

  onSearch(searchQuery: string) {
    this.buscarPersonagem(searchQuery);
  }

  carregarPersonagens() {
    this.isLoading = true;
    this.errorMessage = null;
    this.charactersService.carregarPersonagens().subscribe(
      (data) => {
        this.isLoading = false;
        this.personagens = data;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao carregar os personagens. Tente novamente mais tarde.';
      }
    );
  }

  buscarPersonagem(nome: string) {
    if (!nome.trim()) {
      this.carregarPersonagens();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    this.charactersService.buscarPersonagem(nome).subscribe(
      (data) => {
        this.isLoading = false;
        this.personagens = [...data]; // Mantendo reatividade ao atualizar a lista
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao buscar personagem. Tente novamente mais tarde.';
      }
    );
  }

  trackByIndex(index: number): number {
    return index;
  }

  ngOnInit() {
    this.carregarPersonagens();
  }
}
