import { Component } from '@angular/core';
import { MapIntf } from 'src/app/public/models/interfaces/mapIntf';
import { MapService } from 'src/app/public/services/map.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent {
  public mapList!: MapIntf[];

  constructor(private _mapService: MapService){ }

  ngOnInit(){
    this._mapService.getMaps().subscribe((rs: any) => {
      this.mapList = rs;
    });
  }
}
