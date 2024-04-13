import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadHoraPage } from './disponibilidad-hora.page';

describe('DisponibilidadHoraPage', () => {
  let component: DisponibilidadHoraPage;
  let fixture: ComponentFixture<DisponibilidadHoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
