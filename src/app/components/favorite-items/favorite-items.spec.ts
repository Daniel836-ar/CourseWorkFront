import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItems } from './favorite-items';

describe('FavoriteItems', () => {
  let component: FavoriteItems;
  let fixture: ComponentFixture<FavoriteItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
