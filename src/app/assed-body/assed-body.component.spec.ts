import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssedBodyComponent } from './assed-body.component';

describe('AssedBodyComponent', () => {
  let component: AssedBodyComponent;
  let fixture: ComponentFixture<AssedBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssedBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
