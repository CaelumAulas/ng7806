import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MensagemComponent } from './mensagem/mensagem.component';
import { FiltroPorTitulo } from './listagem/filtroPorTitulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListagemComponent,
    CadastroComponent,
    MensagemComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    ModuloRoteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
