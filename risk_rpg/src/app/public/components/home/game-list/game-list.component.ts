import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  public gameList: any[] = [
    {
      image: '../../../../../assets/images/map-example.jpg',
      title: 'Second Great War',
      map: 'La Tierra',
      time: 65748956,
      areas: 6,
      territories: 193,
      empires: [
        {
          name: 'Asgard Kingdom',
          color: 'actionRed',
          contrast: 'white',
          percentage: 40
        },
        {
          name: 'Draconians',
          color: 'actionBlue',
          contrast: 'white',
          percentage: 28
        },
        {
          name: 'Sun Supremacy',
          color: 'blue',
          contrast: 'white',
          percentage: 22
        },
        {
          name: 'Irgahaim',
          color: 'black',
          contrast: 'white',
          percentage: 15
        },
        {
          name: 'Holy Montain',
          color: 'white',
          contrast: 'black',
          percentage: 5
        },
      ]
    },
    /* {
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
    }, */
  ];

  constructor(){ }
}
