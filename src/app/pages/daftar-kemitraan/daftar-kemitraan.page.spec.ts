import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarKemitraanPage } from './daftar-kemitraan.page';

describe('DaftarKemitraanPage', () => {
  let component: DaftarKemitraanPage;
  let fixture: ComponentFixture<DaftarKemitraanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarKemitraanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
