import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private fb = inject(FormBuilder);
  enviado = false;
 
  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    // Antes: correo: ['', [Validators.required, Validators.email]],
    // Para la prueba cambia a: correo: ['', [Validators.required]],
    // Ahora se corrige:
    correo: ['', [Validators.required, Validators.email]],
    edad: [null as number | null, [Validators.required, Validators.min(18)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
 
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.enviado = true;
  }
}
