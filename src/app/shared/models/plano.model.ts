import { Aparelho } from "./aparelho.model";

export class Plano {
    sku: string;
    franquia: string;
    valor: string;
    ativo: boolean;
    aparelho?: Aparelho;

    constructor(sku: string, franquia: string, valor: string, ativo: boolean, aparelho?: Aparelho) {
        this.sku = sku;
        this.franquia = franquia;
        this.valor = valor;
        this.ativo = ativo;
        this.aparelho = aparelho;
    }
}