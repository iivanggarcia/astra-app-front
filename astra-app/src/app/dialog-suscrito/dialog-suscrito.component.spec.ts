import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuscritoComponent } from './dialog-suscrito.component';

describe('DialogSuscritoComponent', () => {
  let component: DialogSuscritoComponent;
  let fixture: ComponentFixture<DialogSuscritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuscritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSuscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
