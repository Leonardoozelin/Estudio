import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoServicoComponent } from './novo-servico.component';

describe('NovoServicoComponent', () => {
  let component: NovoServicoComponent;
  let fixture: ComponentFixture<NovoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
