import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMediaTypeComponent } from './select-media-type.component';

describe('SelectMediaTypeComponent', () => {
  let component: SelectMediaTypeComponent;
  let fixture: ComponentFixture<SelectMediaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMediaTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMediaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
