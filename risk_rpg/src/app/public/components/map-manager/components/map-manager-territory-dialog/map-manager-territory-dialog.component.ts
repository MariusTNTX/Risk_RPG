import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AreaIntf } from 'src/app/public/models/interfaces/areaIntf';
import { ColorIntf } from 'src/app/public/models/interfaces/colorIntf';
import { colorList } from 'src/app/public/models/lists_and_objects/colorList';
import { MapManagerAreaDialogComponent } from '../map-manager-area-dialog/map-manager-area-dialog.component';
import { NotificationService } from 'src/app/core/notification.service';
import { ConfirmDialogComponent } from '../../../util/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogColorEnum } from 'src/app/public/models/enums/confirmDialogColorEnum';

@Component({
  selector: 'app-map-manager-territory-dialog',
  templateUrl: './map-manager-territory-dialog.component.html',
  styleUrls: ['./map-manager-territory-dialog.component.scss']
})
export class MapManagerTerritoryDialogComponent {

  //DATA:
  public areaList: AreaIntf[] = this.data.areaList;
  public territory: any[] = JSON.parse(JSON.stringify(this.data.territory)); //Copia independiente
  public colorList: ColorIntf[] = colorList;
  public canExit: boolean = this.data.canExit;

  //TERRITORY: 
    //Model
    public territoryName: string = '';
    public territoryArea: string = '';
    public territoryCapital: any;
    public areaColor!: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerTerritoryDialogComponent,
    public dialogRef: MatDialogRef<MapManagerTerritoryDialogComponent>,
    public dialog: MatDialog,
    public _notificationService: NotificationService,
  ) { 
    console.log("territory: ",this.territory)
  }

  dataIsEqual(){
    return false; /* JSON.stringify(this.areaList) === JSON.stringify(this.data); */ //---
  }

  deleteTerritory(){ 
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
      title: 'Eliminar Territorio', 
      content: '¿Deseas eliminar este territorio de forma permanente?',
      color: ConfirmDialogColorEnum.RED
    }});
    dialog.afterClosed().subscribe((accept) => { 
      accept && this.close(false);
    });
  }

  accept(){ 
    this.territoryName && this.territoryArea && this.close(true);
  }

  close(newData: boolean){
    this.dialogRef.close({
      name: this.territoryName, 
      area: this.territoryArea, 
      capital: this.territoryCapital, 
      data: this.data,
      newData: newData
    });
  }
  
}
