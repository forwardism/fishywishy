import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSearchResultComponent } from './fish-search-result.component';

describe('FishSearchResultComponent', () => {
  let component: FishSearchResultComponent;
  let fixture: ComponentFixture<FishSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
