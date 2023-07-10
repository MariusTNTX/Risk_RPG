import { Component } from '@angular/core';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent {
  public mapList: any[] = [
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'La Tierra',
      areas: '6',
      territories: '193'
    },
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'La Tierra',
      areas: '6',
      territories: '193'
    },
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'La Tierra',
      areas: '6',
      territories: '193'
    },
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'La Tierra',
      areas: '6',
      territories: '193'
    },
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'La Tierra',
      areas: '6',
      territories: '193'
    },
  ];

  constructor(){ }
}
