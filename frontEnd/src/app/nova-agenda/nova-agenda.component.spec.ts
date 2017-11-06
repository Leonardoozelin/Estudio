import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAgendaComponent } from './nova-agenda.component';

describe('NovaAgendaComponent', () => {
  let component: NovaAgendaComponent;
  let fixture: ComponentFixture<NovaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
