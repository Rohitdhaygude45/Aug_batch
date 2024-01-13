import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpReactiveFormComponent } from './sign-up-reactive-form.component';

describe('SignUpReactiveFormComponent', () => {
  let component: SignUpReactiveFormComponent;
  let fixture: ComponentFixture<SignUpReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpReactiveFormComponent]
    });
    fixture = TestBed.createComponent(SignUpReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
