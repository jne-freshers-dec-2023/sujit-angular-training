import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UserValidators{
    static usernameexists(control:AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve , rejects) => {
            setTimeout(() => {
                if(control.value === 'sujit')
                resolve({usernameexists:true});
                else
                rejects(null);
            },2000); 
        })
    }
}