import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaVendaComponent } from './edita-venda.component';

describe('EditaVendaComponent', () => {
  let component: EditaVendaComponent;
  let fixture: ComponentFixture<EditaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
