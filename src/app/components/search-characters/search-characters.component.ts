import { Component, EventEmitter, ChangeDetectionStrategy, signal, computed, effect, inject, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-characters',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCharactersComponent {
  @Output() search = new EventEmitter<string>();  

  // Signal para armazenar a pesquisa
  public searchQuery = signal<string>('');

  // Método que emite o valor da pesquisa
  onInputChange(): void {
    this.search.emit(this.searchQuery());  
  }

  // Limpa o campo de pesquisa ao clicar
  public clearTaskField(): void {
    this.searchQuery.set('');
    this.search.emit(''); // Emite vazio para carregar todos os personagens novamente
  }
}
