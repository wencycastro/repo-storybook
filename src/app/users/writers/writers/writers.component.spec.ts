import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersComponent } from './writers.component';

describe('WritersComponent', () => {
  let component: WritersComponent;
  let fixture: ComponentFixture<WritersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritersComponent]
    });
    fixture = TestBed.createComponent(WritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
