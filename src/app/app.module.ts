import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { WindowComponent } from './components/window/window.component';
import { GameComponent } from './pages/game/game.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamewindowComponent } from './components/gamewindow/gamewindow.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScoreComponent } from './components/score/score.component';
import { CardwindowComponent } from './components/cardwindow/cardwindow.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { RestartwarnComponent } from './components/restartwarn/restartwarn.component';

import { HomeModalsComponent } from './components/home-modals/home-modals.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { BestScoresComponent } from './components/best-scores/best-scores.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { GameWarningModalComponent } from './components/game-warning-modal/game-warning-modal.component'
import { environment } from 'src/environments/environment';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WindowComponent,
    GameComponent,
    FooterComponent,
    GamewindowComponent,
    TimerComponent,
    ScoreComponent,
    CardwindowComponent,
    CardComponent,
    HeaderComponent,
    RestartwarnComponent,
    HomeModalsComponent,
    LeaderBoardComponent,
    HowToPlayComponent,
    BestScoresComponent,
    SettingsComponent,
    LoginSignupComponent,
    GameWarningModalComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
