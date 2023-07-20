import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { gameList } from '../models/lists_and_objects/gameList';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private apiService: ApiService) { }

  public getGames(): Observable<any[]>{
    /* const PATH = 'games/';
    return this.apiService.get(PATH); */
    return of(gameList);
  }

}
