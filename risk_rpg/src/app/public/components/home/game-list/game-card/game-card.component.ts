import { Component, Input } from '@angular/core';
import { GameIntf } from 'src/app/public/models/interfaces/gameIntf';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input() game!: GameIntf;

}
