import { HttpClient } from "@angular/common/http";
import { Foto } from "./foto";
import { Injectable } from "@angular/core";
import { FotoModule } from "./foto.module";
import { Observable } from "rxjs";

@Injectable({
    providedIn: FotoModule
})
export class FotoService {

    url = 'http://localhost:3000/v1/fotos/'

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Foto[]> {
        return this.conexaoApi.get<Foto[]>(this.url)
    }

    cadastrar(foto: Foto){
        return this.conexaoApi.post(this.url,foto)
    }

    deletar(foto: Foto){
        return this.conexaoApi.delete(this.url+foto._id)
    }
    
    pesquisar(fotoId: string): Observable<Foto> {
        return this.conexaoApi.get<Foto>(this.url+fotoId)
    }

    atualizar(foto: Foto): Observable<Object> {
        return this.conexaoApi.put(this.url+foto._id,foto)
    }

}