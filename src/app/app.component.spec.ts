import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        FormBuilder
      ],
      imports: [
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn<any>(component, 'createForm').and.callThrough();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('login -> Debe entrar en la condición IF', () => {
    component.loginForm.controls['email'].setValue('prueba@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    component.login();
    expect(component.loginForm.invalid).toBeFalsy();
  });

  it('login -> Debe entrar en la condición ELSE', () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    component.login();
    expect(component).toBeTruthy();
  });



});
