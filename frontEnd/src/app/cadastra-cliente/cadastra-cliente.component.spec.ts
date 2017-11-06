import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraClienteComponent } from './cadastra-cliente.component';

describe('CadastraClienteComponent', () => {
  let component: CadastraClienteComponent;
  let fixture: ComponentFixture<CadastraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
