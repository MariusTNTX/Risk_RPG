import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogAcceptButtonColorIntf } from 'src/app/public/models/interfaces/confirmDialogAcceptButtonColorIntf';
import { ConfirmDialogDataIntf } from 'src/app/public/models/interfaces/confirmDialogDataIntf';
import { confirmDialogColorList } from 'src/app/public/models/lists_and_objects/confirmDialogColorList'

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  /* ---------------------------------------------------
    DATA:
    - 'title': Texto del encabezado
    - 'content': Frase de contenido
    - 'color': Color del botón de aceptar
  ---------------------------------------------------- */

  public acceptButtonColor!: ConfirmDialogAcceptButtonColorIntf;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogDataIntf,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  ngOnInit(): void { 
    this.acceptButtonColor = this.data && this.data.color ? confirmDialogColorList[this.data.color] : confirmDialogColorList[0];
  }

  accept(){
    this.dialogRef.close();
  }
}
