import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapManagerComponent } from './components/map-manager/map-manager.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { HomeComponent } from './components/home/home.component';
import { MapListComponent } from './components/home/map-list/map-list.component';
import { GameListComponent } from './components/home/game-list/game-list.component';

@NgModule({
  declarations: [
    PublicComponent,
    MapManagerComponent,
    NewGameComponent,
    HomeComponent,
    MapListComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule, 
    PublicRoutingModule,
  ]
})
export class PublicModule { }