import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadDiaPage } from './disponibilidad-dia.page';

describe('DisponibilidadDiaPage', () => {
  let component: DisponibilidadDiaPage;
  let fixture: ComponentFixture<DisponibilidadDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
