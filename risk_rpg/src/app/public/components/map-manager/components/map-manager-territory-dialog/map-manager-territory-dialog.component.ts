import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map-manager-territory-dialog',
  templateUrl: './map-manager-territory-dialog.component.html',
  styleUrls: ['./map-manager-territory-dialog.component.scss']
})
export class MapManagerTerritoryDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapManagerTerritoryDialogComponent,
    public dialogRef: MatDialogRef<MapManagerTerritoryDialogComponent>,
  ) { }

  ngOnInit(): void { }

  accept(){ }
  
}
