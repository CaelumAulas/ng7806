import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    
    transform(listaFotos: Foto[], textoDigitado: string){
        
        return listaFotos.filter(
            foto => foto.titulo
                        .toLowerCase()
                        .includes(textoDigitado.toLowerCase())
        )
    }

}