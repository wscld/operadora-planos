import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms";

export class FormUtils {
    static genericValidator(validationFunction: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let valid = false;
            try {
                valid = validationFunction(control);
            } catch (e) {
                // console.log(e);
            }
            return !valid ? { 'Campo inválido': { value: control.value } } : null;
        };
    }

    static validadorGenerico(control: AbstractControl): boolean {
        if (control.value) {
            return true;
        }
        return false;
    }

    static validadorTelefone(control: AbstractControl): boolean {
        const regex = new RegExp('^[1-9]{2}9?[0-9]{8}$');
        return regex.test(control.value);
    }

    static validadorEmail(control: AbstractControl): boolean {
        const regex = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        return regex.test(control.value);
    }

    static validarCpfOuCnpj(control: AbstractControl): boolean {
        const regex = new RegExp(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/);
        return regex.test(control.value);
    }

    static formlarioContemCamposInvalidos(formulario: FormGroup): boolean {
        Object.keys(formulario.controls).forEach(key => {
            if (!formulario.get(key)?.value) {
                formulario.get(key)?.markAsDirty();
                formulario.get(key)?.updateValueAndValidity();
            }
            if (formulario.controls[key].invalid) {
                throw new Error('Verifique os campos inválidos');
            }
        });
        return false;
    }
}