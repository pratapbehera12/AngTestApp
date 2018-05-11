import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgroupComponent } from './catgroup.component';

describe('CatgroupComponent', () => {
  let component: CatgroupComponent;
  let fixture: ComponentFixture<CatgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
