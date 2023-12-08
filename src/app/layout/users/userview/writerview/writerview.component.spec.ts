import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterviewComponent } from './writerview.component';

describe('WriterviewComponent', () => {
  let component: WriterviewComponent;
  let fixture: ComponentFixture<WriterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriterviewComponent]
    });
    fixture = TestBed.createComponent(WriterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
