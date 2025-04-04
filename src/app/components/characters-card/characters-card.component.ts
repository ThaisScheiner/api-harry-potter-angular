import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';  

@Component({
  selector: 'app-characters-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule  
  ],
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent {
  @Input() character!: any;  
}
