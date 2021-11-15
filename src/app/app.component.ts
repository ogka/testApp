import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Formulario de login
  loginForm: FormGroup;

  // Determina si se pueden mostrar los mensajes de validación del formulario
  showValdationMessages: boolean;
  
  constructor(private readonly _formBuilder: FormBuilder) {
    this.showValdationMessages = false;
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(5)
      ]]
    });
  }

  // Comprueba si el formulario es válido para poder hacer login
  login(): void {
    if (this.loginForm.valid) {
      this.showValdationMessages = false;
      console.log('Login... OK.');
    } else {
      this.showValdationMessages = true;
      console.log('Error. El formulario no cumple con los requisitos necesarios.');
    }
  }

}
