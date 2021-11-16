import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { WindowComponent } from './components/window/window.component';
import { GameComponent } from './pages/game/game.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamenavComponent } from './components/gamenav/gamenav.component';
import { GamewindowComponent } from './components/gamewindow/gamewindow.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WindowComponent,
    GameComponent,
    FooterComponent,
    GamenavComponent,
    GamewindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
