import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../../models/character.model';  // Certifique-se de que o caminho está correto

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  // Retornando um Observable para que o componente possa subscrever
  carregarPersonagens(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('https://hp-api.onrender.com/api/characters');
  }
}
