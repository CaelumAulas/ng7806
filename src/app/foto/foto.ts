interface FotoInterface {
    titulo:string;
    url:string;
    descricao:string;
}

export class Foto implements FotoInterface {
    titulo = '';
    url = '';
    descricao = '';
}