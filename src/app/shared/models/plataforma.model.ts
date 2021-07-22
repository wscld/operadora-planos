export class Plataforma {
    sku: string;
    nome: string;
    descricao: string;

    constructor(sku: string, nome: string, descricao: string) {
        this.sku = sku;
        this.nome = nome;
        this.descricao = descricao;
    }
}