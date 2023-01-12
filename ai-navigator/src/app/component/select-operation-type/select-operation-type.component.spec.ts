import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOperationTypeComponent } from './select-operation-type.component';

describe('SelectOperationTypeComponent', () => {
  let component: SelectOperationTypeComponent;
  let fixture: ComponentFixture<SelectOperationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOperationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOperationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
