import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  formData = {}
  console = console;
  basicForm: UntypedFormGroup;

  constructor() { }

  ngOnInit() {
    let password = new UntypedFormControl('', Validators.required);
    let confirmPassword = new UntypedFormControl('', CustomValidators.equalTo(password));

    this.basicForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [
        Validators.minLength(4),
        Validators.maxLength(9)
      ]),
      firstname: new UntypedFormControl('', [
        Validators.required
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email
      ]),
      website: new UntypedFormControl('', CustomValidators.url),
      date: new UntypedFormControl(),
      cardno: new UntypedFormControl('', [
        CustomValidators.creditCard
      ]),
      password: password,
      confirmPassword: confirmPassword,
      gender: new UntypedFormControl('', [
        Validators.required
      ]),
      agreed: new UntypedFormControl('', (control: UntypedFormControl) => {
        const agreed = control.value;
        if(!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }
}