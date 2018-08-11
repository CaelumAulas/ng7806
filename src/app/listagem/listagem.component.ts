import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[] = []

  constructor(private servico: FotoService) {

      this.servico.listar()
        .subscribe(
          (fotosApi) => {
            this.listaFotos = fotosApi
          }
        )
  }

  ngOnInit() {}

  apagar(fotoApagada: Foto){
    this.servico
        .deletar(fotoApagada)
        .subscribe(
          () => {
            /*
            this.listaFotos = this.listaFotos
                                  .filter(foto => {
                                      if(foto != fotoApagada) {
                                        return foto
                                      }
                                  })
            */

            this.listaFotos = this.listaFotos.filter( foto => foto != fotoApagada)

            
          }
          ,erro => console.log(erro)
          
        )
    
  }
}
