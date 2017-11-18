import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAgendaComponent } from './edita-agenda.component';

describe('EditaAgendaComponent', () => {
  let component: EditaAgendaComponent;
  let fixture: ComponentFixture<EditaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
