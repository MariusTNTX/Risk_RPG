import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map-manager-area-dialog',
  templateUrl: './map-manager-area-dialog.component.html',
  styleUrls: ['./map-manager-area-dialog.component.scss']
})
export class MapManagerAreaDialogComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerAreaDialogComponent,
    public dialogRef: MatDialogRef<MapManagerAreaDialogComponent>,
  ) { }

  ngOnInit(): void { }

  accept(){ }

}
