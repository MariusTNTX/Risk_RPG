import { GameIntf } from "../interfaces/gameIntf";

export const gameList: GameIntf[] = [
  {
    id: 1,
    image: '../../../../../assets/images/map-example.jpg',
    title: 'Second Great War',
    map: 'La Tierra',
    time: 65748956,
    areas: 6,
    territories: 193,
    empires: [
      {
        name: 'Asgard Kingdom',
        color: {
          main: 'red',
          contrast: 'white'
        },
        percentage: 40
      },
      {
        name: 'Draconians',
        color: {
          main: 'blue',
          contrast: 'white'
        },
        percentage: 28
      },
      {
        name: 'Sun Supremacy',
        color: {
          main: 'purple',
          contrast: 'white'
        },
        percentage: 22
      },
      {
        name: 'Irgaheym',
        color: {
          main: 'black',
          contrast: 'white'
        },
        percentage: 15
      },
      {
        name: 'Holy Montain',
        color: {
          main: 'white',
          contrast: 'black'
        },
        percentage: 5
      },
    ]
  },
  {
    id: 2,
    image: '../../../../../assets/images/map-example.jpg',
    title: 'Second Great War',
    map: 'La Tierra',
    time: 65748956,
    areas: 6,
    territories: 193,
    empires: [
      {
        name: 'Asgard Kingdom',
        color: {
          main: 'red',
          contrast: 'white'
        },
        percentage: 40
      },
      {
        name: 'Draconians',
        color: {
          main: 'blue',
          contrast: 'white'
        },
        percentage: 28
      },
      {
        name: 'Sun Supremacy',
        color: {
          main: 'purple',
          contrast: 'white'
        },
        percentage: 22
      },
      {
        name: 'Irgaheym',
        color: {
          main: 'black',
          contrast: 'white'
        },
        percentage: 15
      },
      {
        name: 'Holy Montain',
        color: {
          main: 'white',
          contrast: 'black'
        },
        percentage: 5
      },
    ]
  }
];