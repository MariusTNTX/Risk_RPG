import { ColorEnum } from "../enums/colorEnum";
import { GameIntf } from "../interfaces/gameIntf";
import { colorList } from "./colorList";

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
        color: colorList[ColorEnum.DARK_RED],
        percentage: 40
      },
      {
        name: 'Draconians',
        color: colorList[ColorEnum.BLUE],
        percentage: 28
      },
      {
        name: 'Sun Supremacy',
        color: colorList[ColorEnum.PURPLE],
        percentage: 22
      },
      {
        name: 'Irgaheym',
        color: colorList[ColorEnum.BLACK],
        percentage: 15
      },
      {
        name: 'Holy Montain',
        color: colorList[ColorEnum.WHITE],
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
        color: colorList[ColorEnum.DARK_RED],
        percentage: 40
      },
      {
        name: 'Draconians',
        color: colorList[ColorEnum.BLUE],
        percentage: 28
      },
      {
        name: 'Sun Supremacy',
        color: colorList[ColorEnum.PURPLE],
        percentage: 22
      },
      {
        name: 'Irgaheym',
        color: colorList[ColorEnum.BLACK],
        percentage: 15
      },
      {
        name: 'Holy Montain',
        color: colorList[ColorEnum.WHITE],
        percentage: 5
      },
    ]
  }
];