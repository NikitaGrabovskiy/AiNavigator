import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionsBarComponent } from './search-options-bar.component';

describe('SearchOptionsBarComponent', () => {
  let component: SearchOptionsBarComponent;
  let fixture: ComponentFixture<SearchOptionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOptionsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
