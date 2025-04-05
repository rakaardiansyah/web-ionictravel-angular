import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JasaPage } from './jasa.page';

describe('JasaPage', () => {
  let component: JasaPage;
  let fixture: ComponentFixture<JasaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
