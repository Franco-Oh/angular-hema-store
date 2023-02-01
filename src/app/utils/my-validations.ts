import {AbstractControl} from '@angular/forms';

export class MyValidations {
    
    static claveAdmin(control: AbstractControl) {
        const value = control.value; 
        if (value === '1234'){
            return null;
        } else {
            return {claveAdmin:true};
        }
    }
}
    
