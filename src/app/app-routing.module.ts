import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { UserAuthGuardService } from './services/user-auth-guard.service';
import { UserAuthService } from './services/user-auth.service';

const routes: Routes = [
  {path: "game", component: GameComponent, canActivate: [UserAuthGuardService]},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
