export class Aparelho {
    nome: string;
    valor: string
    numeroParcelas: number;
    valorParcela: string;

    constructor(
        nome: string,
        valor: string,
        numeroParcelas: number,
        valorParcela: string
    ) {
        this.nome = nome
        this.valor = valor
        this.numeroParcelas = numeroParcelas
        this.valorParcela = valorParcela
    }
}