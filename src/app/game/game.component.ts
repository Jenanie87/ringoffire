import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { FormsModule } from '@angular/forms';
import {
  // MAT_DIALOG_DATA,
  MatDialog,
  // MatDialogActions,
  // MatDialogClose,
  // MatDialogContent,
  // MatDialogRef,
  // MatDialogTitle,
} from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, DialogAddPlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;
  rotations: number[] = []; 
  currentCardRotation: number = 0;  
  readonly dialog = inject(MatDialog);

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

  getRandomItem(array: string[]) {
    return array[Math.floor(Math.random()*array.length)];
  }

  startNewGame() {
    this.game = new Game();
    this.rotations = [];  
    this.currentCardRotation = 0; 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(inputName => {
      this.addPlayer(inputName, this.getRandomItem(this.game.profileImg));
    });
  }

    addPlayer(name: string, img: string) {
      this.game.players.push({
        name: name,
        img: img,
      })
    }
}
