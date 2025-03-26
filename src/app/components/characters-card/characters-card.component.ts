import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../models/character.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersCardComponent implements OnInit {
  @Input() character!: Character;
  @Input() nome!: string;

  imageUrl: string = '';
  readonly imagemPadrao: string = 'assets/images/default-character.jpg'; // Imagem padrão

  ngOnInit(): void {
    this.obterImagemCharacter();
  }

  // Obtém a URL da imagem do personagem
  obterImagemCharacter(): void {
    this.imageUrl = this.character.image || this.formatarNomeParaImagem(this.nome);
  }

  // Gera a URL da imagem com base no nome do personagem
  private formatarNomeParaImagem(nome: string): string {
    return `https://ik.imagekit.io/hpapi/${this.formatarNome(nome)}.jpg`;
  }

  // Define a imagem padrão caso ocorra erro no carregamento
  imagemFallback(event: Event) {
    (event.target as HTMLImageElement).src = this.imagemPadrao;
  }

  // Formata o nome do personagem para gerar a URL da imagem
  private formatarNome(nome: string): string {
    return nome.toLowerCase().split(' ')[0].replace(/[^a-z]/g, '');
  }
}
