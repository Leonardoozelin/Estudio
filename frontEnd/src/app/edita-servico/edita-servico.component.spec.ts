import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaServicoComponent } from './edita-servico.component';

describe('EditaServicoComponent', () => {
  let component: EditaServicoComponent;
  let fixture: ComponentFixture<EditaServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
