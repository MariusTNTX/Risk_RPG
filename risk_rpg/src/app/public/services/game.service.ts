import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { gameList } from '../models/lists_and_objects/gameList';
import { Observable, of } from 'rxjs';
import { GameIntf } from '../models/interfaces/gameIntf';
import { areaList } from '../models/lists_and_objects/areaList';
import { AreaIntf } from '../models/interfaces/areaIntf';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private apiService: ApiService) { }

  public getGames(): Observable<GameIntf[]>{
    /* const PATH = 'games/';
    return this.apiService.get(PATH); */
    return of(gameList);
  }

  public getAreas(gameId: number): Observable<AreaIntf[]>{
    /* const PATH = `games/${gameId}/`;
    return this.apiService.get(PATH); */
    return of(areaList);
  }

}
