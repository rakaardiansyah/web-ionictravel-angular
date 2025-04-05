import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaketPage } from './paket.page';

describe('PaketPage', () => {
  let component: PaketPage;
  let fixture: ComponentFixture<PaketPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
