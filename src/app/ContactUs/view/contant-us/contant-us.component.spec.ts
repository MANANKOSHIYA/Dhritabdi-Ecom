import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantUsComponent } from './contant-us.component';

describe('ContantUsComponent', () => {
  let component: ContantUsComponent;
  let fixture: ComponentFixture<ContantUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContantUsComponent]
    });
    fixture = TestBed.createComponent(ContantUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
