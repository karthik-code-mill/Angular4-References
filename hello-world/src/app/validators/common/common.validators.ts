import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
import { FormControl } from "@angular/forms";


export class CommonValidators{
    static confirmPassword(c:AbstractControl)//:{[key:string]:any}
    {
        console.log('confirm password validator called ...');
        // let newPassCntrl:FormControl=(c.get("confirmPassword") as FormControl);
        // if(!newPassCntrl.touched){
        //     console.log('not touched');
        //     return null;
        // }
        let newPass:string=(c.get("newPassword").value as string);
        let confPass:string=(c.get("confirmPassword").value as string);
        console.log('newPass: '+newPass+'confPass: '+confPass+'newPass ===(confPass): '+newPass ===(confPass));
        if(newPass !=confPass){
            console.log('validation failed');
            return {confirmPassword:true};
        }            
        return null;            
    }

    static checkOldPassword(c:AbstractControl):Promise<ValidationErrors|null>{
        //creating executor via arrow
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(c.value !='1234'){
                    console.log('password matches in async');
                    resolve({oldPasswordInCorrect:true});
                }                    
                else{
                    console.log('password doesnot matches in async');
                    resolve(null);
                }                    
            },2000);
        });
    }

    
}