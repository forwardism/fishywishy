import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSearchCriteriaComponent } from './fish-search-criteria.component';

describe('FishSearchCriteriaComponent', () => {
  let component: FishSearchCriteriaComponent;
  let fixture: ComponentFixture<FishSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
