import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecovertPasswordComponent } from './recovert-password.component';

describe('RecovertPasswordComponent', () => {
  let component: RecovertPasswordComponent;
  let fixture: ComponentFixture<RecovertPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecovertPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecovertPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
