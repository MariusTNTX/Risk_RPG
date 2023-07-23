import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogColorEnum } from '../../models/enums/confirmDialogColorEnum';
import { NotificationService } from '../../services/notification.service';
import { ConfirmDialogComponent } from '../util/confirm-dialog/confirm-dialog.component';
import { MapManagerAreaDialogComponent } from './components/map-manager-area-dialog/map-manager-area-dialog.component';
import { AreaIntf } from '../../models/interfaces/areaIntf';

@Component({
  selector: 'app-map-manager',
  templateUrl: './map-manager.component.html',
  styleUrls: ['./map-manager.component.scss']
})
export class MapManagerComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  public mapName: string = '';
  public canAddTerritory: boolean = false;
  public canAddConnection: boolean = false;
  public selectedImageUrl: string | ArrayBuffer | null = null;
  public areaList!: AreaIntf[];

  public showTPoint: boolean = false;
  public tPointX: number = 0;
  public tPointY: number = 0;

  constructor(
    public dialog: MatDialog,
    public _notificationService: NotificationService,
  ){}

  ngOnInit(){
    this.areaList = [];
  }

  validMapName(){
    if(this.mapName.trim().length === 0){
      this._notificationService.showError("Debes indicar el nombre del mapa");
    }
    return this.mapName.trim().length > 0;
  }

  saveAndExit(){
    if(this.validMapName()){
      const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
        title: 'Guardar y Salir', 
        content: '¿Deseas guardar el mapa en su estado actual y regresar a la página principal?',
        color: ConfirmDialogColorEnum.BLUE
      }});
      dialog.afterClosed().subscribe((result) => { 
        console.log("Las condiciones del dialog han sido aceptadas. Resultado: ", result)
      });
    }
  }
  
  saveAndPlay(){
    if(this.validMapName()){
      const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
        title: 'Guardar y Jugar', 
        content: '¿Deseas guardar el mapa en su estado actual y comenzar una nueva partida con él?',
        color: ConfirmDialogColorEnum.GREEN
      }});
      dialog.afterClosed().subscribe((result) => { 
        console.log("Las condiciones del dialog han sido aceptadas. Resultado: ", result)
      });
    }
  }

  discard(){
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
      title: 'Descartar Mapa', 
      content: '¿Deseas descartar todos los cambios efectuados sobre este mapa de forma permanente?',
      color: ConfirmDialogColorEnum.RED
    }});
    dialog.afterClosed().subscribe((result) => { 
      console.log("Las condiciones del dialog han sido aceptadas. Resultado: ", result)
    });
  }

  addImage(){
    this.fileInput.nativeElement.click();
  }

  addedImage(event: any){
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  addArea(){
    const dialog = this.dialog.open(MapManagerAreaDialogComponent, { data: this.areaList });
    dialog.afterClosed().subscribe((rs) => { 
      this.areaList = rs;
    });
  }

  addTerritory(){
    this.showTPoint = !this.showTPoint;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.showTPoint) {
      this.tPointX = event.pageX - 15;
      this.tPointY = event.pageY - 15;
    }
  }

  addConnection(){
    
  }

}
