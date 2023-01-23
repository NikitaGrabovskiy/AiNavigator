import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByWordComponent } from './search-by-word.component';

describe('SearchByWordComponent', () => {
  let component: SearchByWordComponent;
  let fixture: ComponentFixture<SearchByWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
