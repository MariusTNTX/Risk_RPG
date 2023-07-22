import { ColorEnum } from "../enums/colorEnum";
import { AreaIntf } from "../interfaces/areaIntf";
import { colorList } from "./colorList";

export const areaList: AreaIntf[] = [
  { color: colorList[ColorEnum.RED], name: 'Asia' },
  { color: colorList[ColorEnum.GREEN], name: 'Europa' },
  { color: colorList[ColorEnum.BLUE], name: 'America' },
  { color: colorList[ColorEnum.BLACK], name: 'Africa' },
]