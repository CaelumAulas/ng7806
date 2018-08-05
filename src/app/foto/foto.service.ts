import { HttpClient } from "@angular/common/http";
import { Foto } from "./foto";
import { Injectable } from "@angular/core";
import { FotoModule } from "./foto.module";

@Injectable({
    providedIn: FotoModule
})
export class FotoService {

    url = 'http://localhost:3000/v1/fotos'

    constructor(private conexaoApi: HttpClient){}

    listar(){
        return this.conexaoApi.get(this.url)
    }

    cadastrar(foto: Foto){
        return this.conexaoApi.post(this.url,foto)
    }

    atualizar(){}

    deletar(){}

    pesquisar(){}
}