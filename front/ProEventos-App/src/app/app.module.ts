import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	 // caso nao exista o modulo de um componente, é necessario
    AppComponent, // que ele fique declarado aqui dentro
    EventosComponent,
    PalestrantesComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // possibilita a gente utilizar dentro do nosso componente
     // a referencia do httpclient
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
