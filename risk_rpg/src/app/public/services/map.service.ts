import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { mapList } from '../models/lists_and_objects/mapList';
import { Observable, of } from 'rxjs';
import { MapIntf } from '../models/interfaces/mapIntf';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private apiService: ApiService) { }

  public getMaps(): Observable<MapIntf[]>{
    /* const PATH = 'maps/';
    return this.apiService.get(PATH); */
    return of(mapList);
  }

}
