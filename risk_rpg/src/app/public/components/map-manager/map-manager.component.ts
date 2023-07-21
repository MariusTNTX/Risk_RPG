import { Component } from '@angular/core';

@Component({
  selector: 'app-map-manager',
  templateUrl: './map-manager.component.html',
  styleUrls: ['./map-manager.component.scss']
})
export class MapManagerComponent {

  saveAndExit(){
    console.log("saveAndExit")
  }
  
  saveAndPlay(){
    console.log("saveAndPlay")
  }

  discard(){
    console.log("discard")
  }

  addImage(){

  }

  addArea(){

  }

  addTerritory(){

  }

  addConnection(){
    
  }

}
