import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../mensagem/mensagem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = new Mensagem();
  formCadastro: FormGroup

  constructor(private servico: FotoService
              ,private rotaAtivada: ActivatedRoute
              ,private roteador: Router
              ,private formBuilder: FormBuilder){}

  ngOnInit(){

    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])],
      url: ['', Validators.required],
      descricao: ''
    })
    //usando observable pra rotas dinamicas
    /*
    this.rotaAtivada.params.subscribe(
              parametros => console.log(parametros.fotoId)
            )
    */
    
    //usando o snapshot da rota (estatico)
    let fotoId = this.rotaAtivada.snapshot.params.fotoId
    
    if(fotoId){
      this.servico.pesquisar(fotoId)
                  .subscribe(
                    fotoApi => {
                      this.foto = fotoApi
                      this.formCadastro.patchValue(fotoApi)
                    }
                  )
    }

  }

  get titulo() {
    return this.formCadastro.get('titulo')
  }

  get url(){
    return this.formCadastro.get('url')
  }

  get descricao(){
    return this.formCadastro.get('descricao')
  }

  salvar(){

    //usa o spread operator (do JS) para criar um novo objeto a partir de 2 que já existem
    this.foto = {...this.foto, ...this.formCadastro.value}
    
    //se a foto tiver id, é atualizacao, se nao, cadastro
    if(this.foto._id){
      this.servico.atualizar(this.foto)
                  .subscribe(
                    () => {
                      this.mensagem.texto = `${this.foto.titulo} atualizada com sucesso`
                      this.mensagem.tipo = 'success'

                      setTimeout(
                        () => this.roteador.navigate([''])
                        , 2000
                      )

                    }
                  )
    }
    else {

      this.servico
          .cadastrar(this.foto)
          .subscribe(
            () => {
              this.mensagem.texto = `${this.foto.titulo} cadastrada com sucesso`;
              this.mensagem.tipo = 'success';
              this.foto = new Foto();
              this.formCadastro.reset();
            }
          )
    }

  }
}