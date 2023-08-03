import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/notification.service';
import { ConfirmDialogColorEnum } from 'src/app/public/models/enums/confirmDialogColorEnum';
import { AreaIntf } from 'src/app/public/models/interfaces/areaIntf';
import { ColorIntf } from 'src/app/public/models/interfaces/colorIntf';
import { colorList } from 'src/app/public/models/lists_and_objects/colorList';
import { ConfirmDialogComponent } from '../../../util/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-map-manager-area-dialog',
  templateUrl: './map-manager-area-dialog.component.html',
  styleUrls: ['./map-manager-area-dialog.component.scss']
})
export class MapManagerAreaDialogComponent {

  //DATA:
  public areaList: AreaIntf[] = JSON.parse(JSON.stringify(this.data)); //Copia independiente
  public colorList: ColorIntf[] = colorList;
  public nameMaxLength: number = 20;

  //AREA: 
    //Model
    public areaName: string = '';
    public areaColor!: any;
    //Edit
    public editMode: boolean = false;
    private editIndex!: number;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerAreaDialogComponent,
    public dialogRef: MatDialogRef<MapManagerAreaDialogComponent>,
    public dialog: MatDialog,
    public _notificationService: NotificationService,
  ) { }

  dataIsEqual(){
    return JSON.stringify(this.areaList) === JSON.stringify(this.data);
  }

  cleanForm(){
    this.editMode = false;
    this.areaColor = null;
    this.areaName = '';
  }

  editArea(index: number){
    this.editMode = true;
    this.editIndex = index;
    this.areaColor = this.areaList[index].color;
    this.areaName = this.areaList[index].name;
  }

  deleteArea(index: number){ 
    this.cleanForm();
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
      title: 'Eliminar Área', 
      content: '¿Deseas eliminar este área? Todos sus territorios y conexiones se eliminarán',
      color: ConfirmDialogColorEnum.RED
    }});
    dialog.afterClosed().subscribe((accept) => { 
      if(accept){
        this.areaList.splice(index, 1);
      }
    });
  }

  applyAddition(){ 
    this.areaList.push({
      color: this.areaColor,
      name: this.areaName
    });
    this.cleanForm();
  }

  applyEdition(){ 
    this.areaList[this.editIndex] = {
      color: this.areaColor,
      name: this.areaName
    };
    this.cleanForm();
  }

  discardEdition(){
    this.cleanForm();
  }

  accept(){ 
    this.dialogRef.close(this.areaList);
  }

}
