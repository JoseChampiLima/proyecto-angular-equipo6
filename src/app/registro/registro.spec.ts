import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registro } from './registro';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Caso de prueba 1: Verificar que el componente se crea correctamente 
  it('1. debe crear el componente', () => {
    expect(component).toBeTruthy();
  });
  // Caso de prueba 2: Verificar que el formulario es inválido si no se ingresan datos
  it('2. formulario inválido si no se ingresan datos', () => {
    expect(component.form.valid).toBe(false);
  });
  // Caso de prueba 3: Verificar que el campo de correo electrónico es inválido si no tiene un formato correcto
  it('3. correo con formato incorrecto es inválido', () => {
    component.form.controls.correo.setValue('correo-malo');
    expect(component.form.controls.correo.hasError('email')).toBe(true);
  });
  // Caso de prueba 4: Verificar que el campo de edad es inválido si es menor a 18
  it('4. edad menor a 18 es inválida', () => {
    component.form.controls.edad.setValue(15);
    expect(component.form.controls.edad.hasError('min')).toBe(true);
  });
  // Caso de prueba 5: Verificar que el formulario es válido si se ingresan todos los datos correctamente
  it('5. formulario válido con todos los datos correctos', () => {
    component.form.setValue({
      nombre: 'Jose Champi',
      correo: 'jose@correo.com',
      edad: 20,
      password: '12345678',
    });
    expect(component.form.valid).toBe(true);
  });
  // Caso de prueba 6: Verificar que el formulario no se marca como enviado si es inválido
  it('6. no marca como enviado si el formulario es inválido', () => {
    component.onSubmit();
    expect(component.enviado).toBe(false);
  });
});