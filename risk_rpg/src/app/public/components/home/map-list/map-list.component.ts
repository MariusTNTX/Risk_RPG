import { Component } from '@angular/core';
import { MapIntf } from 'src/app/public/models/interfaces/mapIntf';
import { mapList } from 'src/app/public/models/lists_and_objects/mapList';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent {
  public mapList: MapIntf[] = mapList;

  constructor(){ }
}
