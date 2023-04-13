import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialIncidenciasComponent } from './historial-incidencias.component';

describe('HistorialIncidenciasComponent', () => {
  let component: HistorialIncidenciasComponent;
  let fixture: ComponentFixture<HistorialIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
