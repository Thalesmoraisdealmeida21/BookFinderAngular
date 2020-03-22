import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksGridComponent } from './list-books-grid.component';

describe('ListBooksGridComponent', () => {
  let component: ListBooksGridComponent;
  let fixture: ComponentFixture<ListBooksGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBooksGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
