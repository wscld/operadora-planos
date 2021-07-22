export class Plano {
    sku: string;
    franquia: string;
    valor: string;
    valorInteiro: number;
    ativo: boolean;

    constructor(sku: string, franquia: string, valor: string, ativo: boolean) {
        this.sku = sku;
        this.franquia = franquia;
        this.valor = valor;
        this.ativo = ativo;
        this.valorInteiro = parseFloat(valor);
    }
}