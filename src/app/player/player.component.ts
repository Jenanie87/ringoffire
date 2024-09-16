import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() singlePlayer = {
    name: "Bunny",
    img: "../assets/img/profiles/profile_1.svg"
  };
}
