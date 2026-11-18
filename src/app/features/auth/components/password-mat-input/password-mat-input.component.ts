import { Component, input, Input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordMatchValidator } from '../../../../shared/validation/password-match-validator';
import { BaseRegisterValidationService } from '../../validations/base-register-validation.service';

@Component({
  selector: 'app-password-mat-input',
  standalone: false,
  templateUrl: './password-mat-input.component.html',
  styleUrl: './password-mat-input.component.scss',
})
export class PasswordMatInputComponent {

  constructor(public validator : BaseRegisterValidationService){}

  hidePassword = signal(true);

  @Input({ required: true }) control!: FormControl;
  @Input() label : string = 'Enter your password';
  @Input() isLogin : boolean = false;

  clickEvent(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

}
