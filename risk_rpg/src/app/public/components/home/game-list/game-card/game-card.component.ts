import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameIntf } from 'src/app/public/models/interfaces/gameIntf';
import { ConfirmDialogComponent } from '../../../util/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogColorEnum } from 'src/app/public/models/enums/confirmDialogColorEnum';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input() game!: GameIntf;

  constructor(
    public dialog: MatDialog
  ){}

  openDeleteDialog(){
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
      title: 'Eliminar Partida', 
      content: '¿Deseas eliminar esta partida de forma permanente?',
      color: ConfirmDialogColorEnum.RED
    }});
    dialog.afterClosed().subscribe((result) => { 
      console.log("Las condiciones del dialog han sido aceptadas. Resultado: ", result)
    });
  }

}
