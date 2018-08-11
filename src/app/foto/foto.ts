interface FotoInterface {
    titulo:string;
    url:string;
    descricao:string;
    _id:string;
}

export class Foto implements FotoInterface {
    titulo = '';
    url = '';
    descricao = '';
    _id = '';
}