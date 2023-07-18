import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../util/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogColorEnum } from 'src/app/public/models/enums/confirmDialogColorEnum';
import { MapIntf } from 'src/app/public/models/interfaces/mapIntf';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']
})
export class MapCardComponent {

  @Input() map!: MapIntf;

  constructor(
    public dialog: MatDialog,
  ){ }

  openDeleteDialog(){
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
      title: 'Eliminar Mapa', 
      content: '¿Deseas eliminar este mapa de forma permanente?',
      color: ConfirmDialogColorEnum.RED
    }});
    dialog.afterClosed().subscribe((result) => { 
      console.log("Las condiciones del dialog han sido aceptadas. Resultado: ", result)
    });
  }
}
