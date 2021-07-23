import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { SetPlano, SetPlataforma } from "./app.actions";
import { Plano } from "./models/plano.model";
import { Plataforma } from "./models/plataforma.model";

export interface AppStateModel {
    plataforma: Plataforma | null;
    plano: Plano | null;
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        plataforma: null,
        plano: null
    }
})

@Injectable()
export class AppState {
    @Action(SetPlataforma)
    setPlataforma({ patchState }: StateContext<AppStateModel>, { plataforma }: SetPlataforma): void {
        patchState({ plataforma });
    }

    @Action(SetPlano)
    setPlano({ patchState }: StateContext<AppStateModel>, { plano }: SetPlano): void {
        patchState({ plano });
    }
}
