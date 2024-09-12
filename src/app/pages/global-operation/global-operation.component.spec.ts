import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOperationComponent } from './global-operation.component';

describe('GlobalOperationComponent', () => {
  let component: GlobalOperationComponent;
  let fixture: ComponentFixture<GlobalOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalOperationComponent]
    });
    fixture = TestBed.createComponent(GlobalOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
