import { EventEmitter, Injectable } from "@angular/core";
import { Log } from "../../models/log.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogEvent: EventEmitter<Log> = new EventEmitter<Log>();
  constructor() {
    // nada aqui
  }

  obterDialogs(): EventEmitter<Log> {
    return this.dialogEvent;
  }

  exibirDialog(header: string, message: string): void {
    this.dialogEvent.emit(new Log(header, message));
  }
}
