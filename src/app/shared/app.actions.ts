import { Plano } from "./models/plano.model";
import { Plataforma } from "./models/plataforma.model";

export class SetPlataforma {
    static readonly type = '[app] define plataforma'
    constructor(public plataforma: Plataforma) {
    }
}

export class SetPlano {
    static readonly type = '[app] define plano'
    constructor(public plano: Plano) {
    }
}