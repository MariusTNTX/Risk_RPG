import { Component } from '@angular/core';
import { GameIntf } from 'src/app/public/models/interfaces/gameIntf';
import { gameList } from 'src/app/public/models/lists_and_objects/gameList';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  public gameList: GameIntf[] = gameList;

  constructor(){ }
}
