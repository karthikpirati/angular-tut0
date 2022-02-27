import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingOperatorsComponent } from './mapping-operators.component';

describe('MappingOperatorsComponent', () => {
  let component: MappingOperatorsComponent;
  let fixture: ComponentFixture<MappingOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
