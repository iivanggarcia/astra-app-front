import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIncidenciaComponent } from './dialog-incidencia.component';

describe('DialogIncidenciaComponent', () => {
  let component: DialogIncidenciaComponent;
  let fixture: ComponentFixture<DialogIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIncidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
