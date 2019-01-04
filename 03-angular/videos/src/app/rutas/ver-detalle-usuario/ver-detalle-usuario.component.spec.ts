import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleUsuarioComponent } from './ver-detalle-usuario.component';

describe('VerDetalleUsuarioComponent', () => {
  let component: VerDetalleUsuarioComponent;
  let fixture: ComponentFixture<VerDetalleUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetalleUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
