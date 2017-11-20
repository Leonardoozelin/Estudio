import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaClienteComponent } from './edita-cliente.component';

describe('EditaClienteComponent', () => {
  let component: EditaClienteComponent;
  let fixture: ComponentFixture<EditaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
