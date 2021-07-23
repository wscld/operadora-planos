import { Injectable, ErrorHandler, Injector, Inject, NgZone } from "@angular/core";
import { DialogService } from "../services/dialog/dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private dialogService: DialogService, private ngZone: NgZone) { }

    handleError(error: Error): void {
        this.ngZone.run(() => {
            this.dialogService.exibirDialog('Algo deu errado...', error.message);
        });
    }
}