import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingbooksComponent } from './pendingbooks.component';

describe('PendingbooksComponent', () => {
  let component: PendingbooksComponent;
  let fixture: ComponentFixture<PendingbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingbooksComponent]
    });
    fixture = TestBed.createComponent(PendingbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
