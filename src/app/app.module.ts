import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"smart-hapurudeniya","appId":"1:905553276992:web:67a8abc53b4f4d4fc2efa5","storageBucket":"smart-hapurudeniya.firebasestorage.app","apiKey":"AIzaSyAXpCI30WIYYtutk64tyIS_cZZsl1-YOwA","authDomain":"smart-hapurudeniya.firebaseapp.com","messagingSenderId":"905553276992"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
