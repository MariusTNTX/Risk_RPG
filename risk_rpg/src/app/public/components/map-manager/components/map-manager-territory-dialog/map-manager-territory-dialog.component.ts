import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogColorEnum } from 'src/app/public/models/enums/confirmDialogColorEnum';
import { AreaIntf } from 'src/app/public/models/interfaces/areaIntf';
import { ColorIntf } from 'src/app/public/models/interfaces/colorIntf';
import { colorList } from 'src/app/public/models/lists_and_objects/colorList';
import { ConfirmDialogComponent } from '../../../util/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-map-manager-territory-dialog',
  templateUrl: './map-manager-territory-dialog.component.html',
  styleUrls: ['./map-manager-territory-dialog.component.scss']
})
export class MapManagerTerritoryDialogComponent {

  @ViewChild('cancelButton', { static: false }) cancelButton!: ElementRef;

  //DATA:
  public areaList: AreaIntf[] = this.data.areaList;
  public colorList: ColorIntf[] = colorList;
  public territory: any[] = this.data.territory;
  public canExit: boolean = this.data.canExit;

  //TERRITORY: 
    //Model
    public territoryName: string = '';
    public territoryArea: string = '';
    public territoryCapital: any;
    public areaColor!: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerTerritoryDialogComponent,
    private dialogRef: MatDialogRef<MapManagerTerritoryDialogComponent>,
    private dialog: MatDialog,
  ) { 
    console.log("territory: ",this.territory)
  }

  ngOnInit(){
    if(this.territory && this.territory.length > 0){
      this.territoryName = this.territory[0].name;
      this.territoryArea = this.territory[0].area;
      this.territoryCapital = this.territory[0].capital;
    }
  }

  ngAfterViewInit() {
    if (this.cancelButton && this.cancelButton.nativeElement) {
      this.cancelButton.nativeElement.blur();
    }
  }

  dataIsEqual(){
    return false;
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
      capital: this.territoryCapital ? this.territoryCapital : false, 
      data: this.data,
      newData: newData,
      addTerritory: !this.data.canExit
    });
  }
  
}
