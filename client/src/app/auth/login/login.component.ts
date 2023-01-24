import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserControls, UserFormGroup } from './types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _form:UserFormGroup;

  constructor(){
    this._form = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    } as UserControls) as UserFormGroup;
  }

  get form(){
    return this._form as UserFormGroup;
  }
}
