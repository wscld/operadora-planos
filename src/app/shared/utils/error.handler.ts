import { Injectable, ErrorHandler, Injector, Inject, NgZone } from "@angular/core";
import { DialogService } from "../services/dialog/dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private dialogService: DialogService) { }

    handleError(error: Error) {
        this.dialogService.exibirDialog('Algo deu errado...', error.message);
    }
}