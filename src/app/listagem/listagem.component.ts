import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos

  constructor(servico: FotoService) {

      servico.listar()
      .subscribe(
        (fotosApi) => {
          this.listaFotos = fotosApi
        }
      )
  }

  ngOnInit() {
  }

}
