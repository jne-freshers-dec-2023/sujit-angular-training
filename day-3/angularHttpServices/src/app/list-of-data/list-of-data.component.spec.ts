import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDataComponent } from './list-of-data.component';

describe('ListOfDataComponent', () => {
  let component: ListOfDataComponent;
  let fixture: ComponentFixture<ListOfDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
