import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor(private servico: FotoService) { }

  ngOnInit() {}

  salvar(){
    this.servico
        .cadastrar(this.foto)
        .subscribe(
          (resposta) => console.log('cadastrouuuu',resposta)
        )
  }

}
