import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { StartComponent } from './start/start.component';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerSkillsComponent } from './player-skills/player-skills.component';
import { PlayerShopComponent } from './player-shop/player-shop.component';
import { PlayerBattleComponent } from './player-battle/player-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    NinjaSelectionComponent,
    StartComponent,
    PlayerHomeComponent,
    PlayerSkillsComponent,
    PlayerShopComponent,
    PlayerBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
