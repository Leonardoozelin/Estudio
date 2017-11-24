import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProdutosComponent } from './edita-produtos.component';

describe('EditaProdutosComponent', () => {
  let component: EditaProdutosComponent;
  let fixture: ComponentFixture<EditaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
