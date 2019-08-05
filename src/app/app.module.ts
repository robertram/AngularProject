import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//Firebase Conection
export const firebaseConfig = {
  apiKey: "AIzaSyAHsaEUyrgwZYd-v_cgjLW0yDw-gypIUMo",
  authDomain: "semana12-b1ba9.firebaseapp.com",
  databaseURL: "https://semana12-b1ba9.firebaseio.com",
  storageBucket: "semana12-b1ba9.appspot.com",
  messagingSenderId: "920915323552"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
