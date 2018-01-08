import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";

import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { Routes, RouterModule } from '@angular/router';

import  { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LinkifystrPipe } from './pipes/linkifystr.pipe';



const appRoutes = [

	{path: '', component: LugaresComponent},

	{path: 'lugares', component: LugaresComponent},

	{path: 'detalle/:id', component: DetalleComponent},

	{path: 'contacto', component: ContactoComponent},

	{path: 'crear/:id', component: CrearComponent}

];

export const firebaseConfig = {
  	apiKey: "AIzaSyC5s3m2RNc1MWeN8veLJz4BHQnmB4Dqz-g",
    authDomain: "platzisquare-1515026963209.firebaseapp.com",
    databaseURL: "https://platzisquare-1515026963209.firebaseio.com",
    storageBucket: "platzisquare-1515026963209.appspot.com",
    messagingSenderId: "1028912625631"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhe40h6kwV2p03DDOgZJQP9kXzW8LxlJI'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
