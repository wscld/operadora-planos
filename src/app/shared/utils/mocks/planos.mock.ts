import { Plano } from "../../models/plano.model";

export class PlanosMock {
    static obterPlanos(): Plano[] {
        return [
            new Plano('PLNO1', '20GB', '22.2', true),
            new Plano('PLNO2', '15GB', '20.1', true),
            new Plano('PLNO3', '30GB', '32.6', true),
            new Plano('PLNO4', '10GB', '12.7', false),
        ];
    }
}