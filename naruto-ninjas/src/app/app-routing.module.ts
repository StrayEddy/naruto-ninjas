import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerSkillsComponent } from './player-skills/player-skills.component';
import { PlayerShopComponent } from './player-shop/player-shop.component';
import { PlayerBattleComponent } from './player-battle/player-battle.component';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent},
  { path: 'ninja-selection', component: NinjaSelectionComponent},
  { path: 'player-home/:id', component: PlayerHomeComponent},
  { path: 'player-skills/:id', component: PlayerSkillsComponent},
  { path: 'player-shop/:id', component: PlayerShopComponent},
  { path: 'player-battle/:id', component: PlayerBattleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
