import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnpushChildComponent } from './change-detection-onpush-child.component';

describe('ChangeDetectionOnpushChildComponent', () => {
  let component: ChangeDetectionOnpushChildComponent;
  let fixture: ComponentFixture<ChangeDetectionOnpushChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOnpushChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOnpushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
