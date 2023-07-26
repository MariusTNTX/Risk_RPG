import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
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
import { ConfirmDialogComponent } from './components/util/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { MapManagerAreaDialogComponent } from './components/map-manager/components/map-manager-area-dialog/map-manager-area-dialog.component';
import { MapManagerTerritoryDialogComponent } from './components/map-manager/components/map-manager-territory-dialog/map-manager-territory-dialog.component';

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
    MillisecondsToHoursPipe,
    ConfirmDialogComponent,
    MapManagerAreaDialogComponent,
    MapManagerTerritoryDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule, 
    MatTooltipModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }