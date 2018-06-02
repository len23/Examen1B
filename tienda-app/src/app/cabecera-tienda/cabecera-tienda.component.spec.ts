import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraTiendaComponent } from './cabecera-tienda.component';

describe('CabeceraTiendaComponent', () => {
  let component: CabeceraTiendaComponent;
  let fixture: ComponentFixture<CabeceraTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
