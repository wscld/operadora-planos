import { Plano } from "./plano.model";
import { Plataforma } from "./plataforma.model";

export class DadosCliente {
    nome?: string;
    email?: string;
    dataNascimento?: Date;
    cpf?: string;
    telefone?: string;
    plano?: Plano;
    plataforma?: Plataforma;

    constructor(
        nome?: string,
        email?: string,
        dataNascimento?: Date,
        telefone?: string,
        cpf?: string,
        plano?: Plano,
        plataforma?: Plataforma
    ) {
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
        this.cpf = cpf
        this.plano = plano
        this.plataforma = plataforma
        this.telefone = telefone;
    }
}
