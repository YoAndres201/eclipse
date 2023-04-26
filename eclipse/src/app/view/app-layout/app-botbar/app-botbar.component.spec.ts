import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBotbarComponent } from './app-botbar.component';

describe('AppBotbarComponent', () => {
  let component: AppBotbarComponent;
  let fixture: ComponentFixture<AppBotbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBotbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
