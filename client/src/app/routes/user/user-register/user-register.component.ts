import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
    const formValue = this.validateForm.value;
    console.log(formValue.username, formValue.password);
    const user = {
      id: null,
      username: formValue.username,
      password: formValue.password
    };
    this.userService.findUser(formValue.username)
      .then(res => {
        console.log(res, 'res');
        if (res) {
          console.log('此账号已存在！');
        }else {
          this.userService.registerUser(user)
            .then(() => {
              console.log(res);
            });
        }
      });
  }

  constructor(private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
