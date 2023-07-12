import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MapManagerComponent } from './components/map-manager/map-manager.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { HomeComponent } from './components/home/home.component';
import { MapListComponent } from './components/home/map-list/map-list.component';
import { GameListComponent } from './components/home/game-list/game-list.component';
import { MapCardComponent } from './components/home/map-list/map-card/map-card.component';
import { GameCardComponent } from './components/home/game-list/game-card/game-card.component';
import { MillisecondsToHoursPipe } from './pipes/milliseconds-to-hours.pipe';

@NgModule({
  declarations: [
    PublicComponent,
    MapManagerComponent,
    NewGameComponent,
    HomeComponent,
    MapListComponent,
    GameListComponent,
    MapCardComponent,
    GameCardComponent,
    MillisecondsToHoursPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule, 
    MatTooltipModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }