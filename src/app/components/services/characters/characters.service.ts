import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../../../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters'; // Mantenha ou altere para o endpoint correto

  constructor(private httpClient: HttpClient) {}

  // Carregar todos os personagens
  carregarPersonagens(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.apiUrl);
  }

  // Filtrar personagens por nome
  buscarPersonagem(nome: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.apiUrl}`).pipe(
      map((characters) =>
        characters.filter((character) =>
          character.name.toLowerCase().includes(nome.toLowerCase())
        )
      )
    );
  }
}
