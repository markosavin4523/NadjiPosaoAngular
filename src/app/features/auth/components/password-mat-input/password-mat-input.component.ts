import { Component, Input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseRegisterValidation } from '../../validations/base-register-validation';

@Component({
  selector: 'app-password-mat-input',
  standalone: false,
  templateUrl: './password-mat-input.component.html',
  styleUrl: './password-mat-input.component.scss',
})
export class PasswordMatInputComponent {

  constructor(public validator : BaseRegisterValidation){}

  hidePassword = signal(true);

  @Input({ required: true }) control!: FormControl;
  @Input() label = 'Enter your password';

  clickEvent(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

}
