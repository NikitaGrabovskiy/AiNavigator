import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificServicesComponent } from './specific-services.component';

describe('SpecificServicesComponent', () => {
  let component: SpecificServicesComponent;
  let fixture: ComponentFixture<SpecificServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
