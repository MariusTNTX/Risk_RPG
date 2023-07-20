import { Component } from '@angular/core';
import { GameIntf } from 'src/app/public/models/interfaces/gameIntf';
import { GameService } from 'src/app/public/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  public gameList!: GameIntf[];

  constructor(private _gameService: GameService){ }

  ngOnInit(){
    this._gameService.getGames().subscribe((rs: any) => {
      this.gameList = rs;
    })
  }
}
