import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CommonValidators } from '../../validators/common/common.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
  form= new FormGroup({
    oldPassword: new FormControl('',Validators.required,CommonValidators.checkOldPassword),
    newPasswordGroup: new FormGroup(
      {
        newPassword: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      },
      CommonValidators.confirmPassword
    )    
  });

  changePasswordSubmit(){
    console.log(this.form);
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPasswordGroup.newPassword');
  }
  get confirmPassword(){
    return this.form.get('newPasswordGroup.confirmPassword');
  }
  get newPasswordGroup(){
    return this.form.get('newPasswordGroup');
  }


}
