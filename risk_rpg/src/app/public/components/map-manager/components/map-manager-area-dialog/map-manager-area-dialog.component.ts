import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColorEnum } from 'src/app/public/models/enums/colorEnum';
import { AreaIntf } from 'src/app/public/models/interfaces/areaIntf';
import { ColorIntf } from 'src/app/public/models/interfaces/colorIntf';
import { colorList } from 'src/app/public/models/lists_and_objects/colorList';

@Component({
  selector: 'app-map-manager-area-dialog',
  templateUrl: './map-manager-area-dialog.component.html',
  styleUrls: ['./map-manager-area-dialog.component.scss']
})
export class MapManagerAreaDialogComponent {

  //Model
  public areaName: string = '';
  public areaColor!: any;

  //Other
  public editMode: boolean = false;
  public areaList!: AreaIntf[];
  public colorList: ColorIntf[] = colorList;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerAreaDialogComponent,
    public dialogRef: MatDialogRef<MapManagerAreaDialogComponent>
  ) { }

  ngOnInit(){ 
    //Provisional:
    this.areaList = [
      /* { color: colorList[ColorEnum.RED], name: 'Asia' },
      { color: colorList[ColorEnum.BLUE], name: 'América' },
      { color: colorList[ColorEnum.GREEN], name: 'Europa' },
      { color: colorList[ColorEnum.BLACK], name: 'África' },
      { color: colorList[ColorEnum.YELLOW], name: 'Oceanía' },
      { color: colorList[ColorEnum.WHITE], name: 'Antártida' }, */
    ]
  }

  editArea(){ }

  deleteArea(){ }

  applyAddition(){ 
    this.areaList.push({
      color: this.areaColor,
      name: this.areaName
    });
    this.areaColor = null;
    this.areaName = '';
  }

  applyEdition(){ }

  accept(){ }

}
