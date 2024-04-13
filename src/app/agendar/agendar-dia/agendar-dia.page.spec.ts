import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarDiaPage } from './agendar-dia.page';

describe('AgendarDiaPage', () => {
  let component: AgendarDiaPage;
  let fixture: ComponentFixture<AgendarDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
