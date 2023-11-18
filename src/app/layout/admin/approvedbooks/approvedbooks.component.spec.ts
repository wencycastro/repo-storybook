import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedbooksComponent } from './approvedbooks.component';

describe('ApprovedbooksComponent', () => {
  let component: ApprovedbooksComponent;
  let fixture: ComponentFixture<ApprovedbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedbooksComponent]
    });
    fixture = TestBed.createComponent(ApprovedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
