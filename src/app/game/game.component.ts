import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;
  rotations: number[] = [];  // Array für Rotationen der gespielten Karten
  currentCardRotation: number = 0;  // Rotation für die aktuelle Karte

  constructor() { }

  ngOnInit(): void {
    this.startNewGame();
  }

  pickCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      if (this.currentCard !== undefined) {
        this.currentCardRotation = this.getRandomRotation();
        this.game.playedCards.push(this.currentCard);
        this.rotations.push(this.currentCardRotation);
      }
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500)
    }

  }

  getRandomRotation(): number {
    return Math.floor(Math.random() * 41) - 20;
  }

  startNewGame() {
    this.game = new Game();
    this.rotations = [];  
    this.currentCardRotation = 0; 
  }
}
