import { GameEmpireIntf } from "./gameEmpireIntf";

export interface GameIntf {
  id: number,
  image: string,
  title: string,
  map: string,
  time: number,
  areas: number,
  territories: number,
  empires: GameEmpireIntf[]
}