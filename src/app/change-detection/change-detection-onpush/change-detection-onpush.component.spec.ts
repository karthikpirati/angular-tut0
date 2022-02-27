import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnpushComponent } from './change-detection-onpush.component';

describe('ChangeDetectionOnpushComponent', () => {
  let component: ChangeDetectionOnpushComponent;
  let fixture: ComponentFixture<ChangeDetectionOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
