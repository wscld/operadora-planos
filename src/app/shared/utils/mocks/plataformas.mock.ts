import { Plataforma } from "../../models/plataforma.model";

export class PlataformasMock {
    static obterPlataformas(): Plataforma[] {
        return [
            new Plataforma('PLTF1', 'Smartphone', 'teste1'),
            new Plataforma('PLTF2', 'PC', 'teste2'),
            new Plataforma('PLTF3', 'Smartphone', 'teste3'),
            new Plataforma('PLTF4', 'Tablet', 'teste4'),
        ];
    }
}