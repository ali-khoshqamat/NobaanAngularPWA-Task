import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrateCameraComponent } from './vibrate-camera.component';

describe('VibrateCameraComponent', () => {
  let component: VibrateCameraComponent;
  let fixture: ComponentFixture<VibrateCameraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VibrateCameraComponent]
    });
    fixture = TestBed.createComponent(VibrateCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
