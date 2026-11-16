import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
    nombre: [''],
    correo: [''],
    edad: [null as number | null],
    password: [''],
  });

  onSubmit() {
    this.enviado = true;
  }
}
