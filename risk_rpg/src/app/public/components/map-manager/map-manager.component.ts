import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogColorEnum } from '../../models/enums/confirmDialogColorEnum';
import { NotificationService } from '../../services/notification.service';
import { ConfirmDialogComponent } from '../util/confirm-dialog/confirm-dialog.component';
import { MapManagerAreaDialogComponent } from './components/map-manager-area-dialog/map-manager-area-dialog.component';
import { AreaIntf } from '../../models/interfaces/areaIntf';
import { MapManagerTerritoryDialogComponent } from './components/map-manager-territory-dialog/map-manager-territory-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-manager',
  templateUrl: './map-manager.component.html',
  styleUrls: ['./map-manager.component.scss']
})
export class MapManagerComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('mapContainer') mapContainerRef!: ElementRef<HTMLDivElement>;

  //DATA:
  public mapName: string = '';
  public selectedImageUrl: string | ArrayBuffer | null = null;
  public areaList!: AreaIntf[];
  public territoryList!: any[];
  public connectionList!: any[];
  public nextId: number = 0;

  //Coordinates
  public showTPoint: boolean = false;
  public tPointX: number = 0;
  public tPointY: number = 0;

  constructor(
    public dialog: MatDialog,
    public _notificationService: NotificationService,
    private router: Router,
  ){}

  ngOnInit(){
    this.areaList = [];
    this.territoryList = [];
  }

  validMapName(){
    if(this.mapName.trim().length === 0){
      this._notificationService.showError("Debes indicar el nombre del mapa");
    }
    return this.mapName.trim().length > 0;
  }

  // OPCIONES SUPERIORES --------------------------------------------------------------------------

  saveAndExit(){
    if(this.validMapName()){
      const dialog = this.dialog.open(ConfirmDialogComponent, { data: { 
        title: 'Guardar y Salir', 
        content: '¿Deseas guardar el mapa en su estado actual y regresar a la página principal?',
        color: ConfirmDialogColorEnum.BLUE
      }});
      dialog.afterClosed().subscribe((result) => { 
        result && this.router.navigate(['../']);
        this._notificationService.showSuccess("El mapa ha sido guardado");
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
        result && this.router.navigate(['/newGame']);
        this._notificationService.showSuccess("El mapa ha sido guardado");
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
      result && this.router.navigate(['../']);
    });
  }

  // BOTONES PRINCIPALES --------------------------------------------------------------------------

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
    const dialog = this.dialog.open(MapManagerAreaDialogComponent, { data: this.areaList, disableClose: true });
    dialog.afterClosed().subscribe((rs) => { 
      this.areaList = rs;
    });
  }

  territoryMode(){
    this.showTPoint = !this.showTPoint;
  }

  // ASIGNACIÓN TERRITORIOS -----------------------------------------------------------------------

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.showTPoint) {
      let clickedElement = event.target as HTMLElement;
      if (clickedElement.classList.contains('map-image')) {
        clickedElement = clickedElement.parentNode as HTMLElement;
        this.showTPoint = false;
        const containerRect = clickedElement.getBoundingClientRect();
        const x = ((event.clientX - containerRect.left) / containerRect.width) * 100;
        const y = ((event.clientY - containerRect.top) / containerRect.height) * 100;
        this.addTerritory(x, y);
      }
    }
  }

  addTerritory(x: number, y: number){
    const mapContainer = this.mapContainerRef.nativeElement;
    const containerRect = mapContainer.getBoundingClientRect();
    x = x - ( (15 * 100) / containerRect.width );
    y = y - ( (15 * 100) / containerRect.height );
    const newButton = document.createElement('button', { is: 'mat-button' }) as HTMLButtonElement;
    newButton.id = this.nextId.toString();
    this.nextId = this.nextId + 1;
    newButton.style.position = 'absolute';
    newButton.style.width = '30px';
    newButton.style.height = '30px';
    newButton.style.backgroundColor = 'transparent';
    newButton.style.border = '8px solid black';
    newButton.style.borderRadius = '20px';
    newButton.style.cursor = 'pointer';
    newButton.style.left = x + '%';
    newButton.style.top = y + '%';
    mapContainer.appendChild(newButton);
    newButton.addEventListener('click', (event: any) => this.openMapDialog(x, y, newButton, true, event.target.id));
    this.openMapDialog(x, y, newButton, false, newButton.id);
  }

  openMapDialog(x: number, y: number, newButton: HTMLButtonElement, canExit: boolean, id: string){
    const dialog = this.dialog.open(MapManagerTerritoryDialogComponent, { 
      data: { 
        x: x, 
        y: y, 
        id: newButton, 
        canExit: canExit, 
        areaList: this.areaList
      }, 
      disableClose: true, 
      width: '300px' 
    });
    dialog.afterClosed().subscribe((rs) => { 
      if(rs && rs.newData){ //Agregar territorio si se ha validado correctamente
        console.log("TerritoryDialog - NewData Result: ",rs);
        this.territoryList.push({
          id: 0,
          name: '',
          area: '',
          capital: false,
          x: 0,
          y: 0
        });
      } else if (rs && !rs.newData){ //Eliminar DIV si se ha descartado el territorio
        console.log("TerritoryDialog - RemoveData Result: ",rs);
      }
    });
  }

  getTerritory(event: any){
    console.log("getTerritory - Event: ",event);
    return {name: "name", area: "area"};
  }

  //ASIGNACIÓN DE CONEXIONES ----------------------------------------------------------------------

  addConnection(){
    
  }

}
