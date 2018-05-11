import { HomeComponent } from './../home/home.component';
import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
} from '@angular/core/testing';

import { CatgroupComponent } from './catgroup.component';
import { IApiService } from '../service/iapi.service';
import { ApiDataService } from '../service/apidata.service';
import { AnimalModel } from '../model/animal.model';

describe('CatgroupComponent', () => {
  let component: CatgroupComponent;
  let fixture: ComponentFixture<CatgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatgroupComponent],
      providers: [{ provide: IApiService, useClass: ApiDataService }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CatgroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(CatgroupComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });

  it('should create a valid instance', () => {
    expect(component).toBeTruthy();
  });

  it('initially component error flag should be false', async(() => {
    // assert
    expect(component.catModel.error).toBe(false);
  }));

  it('component should call api once after initialization', async(() => {
    // arrange
    const api = fixture.debugElement.injector.get(IApiService);
    spyOn(api, 'getItems').and.callThrough();

    // act
    component.ngOnInit();

    // assert
    expect(api.getItems).toHaveBeenCalledTimes(1);
  }));

  it('component should call filterCatsByOwnerGender function once after initialization', async(() => {
    // arrange
    spyOn(component, 'filterCatsByOwnerGender');

    // act
    component.ngOnInit();

    // assert
    expect(component.filterCatsByOwnerGender).toHaveBeenCalledTimes(1);
  }));

  it('data should be grouped under Male and Female for the mock data', async(() => {
    // act
    component.ngOnInit();

    // assert
    expect(component.catModel.catDataCol.length).toBe(2);
    expect(component.catModel.catDataCol[0].ownerGender).toBe('Male');
    expect(component.catModel.catDataCol[1].ownerGender).toBe('Female');
  }));

  it('there should be 4 cats under Male and 3 under Female for the mock data', async(() => {
    // act
    component.ngOnInit();

    // assert
    expect(component.catModel.catDataCol.length).toBe(2);
    expect(component.catModel.catDataCol[0].cats.length).toBe(4);
    expect(component.catModel.catDataCol[1].cats.length).toBe(3);
  }));

  it('ordered pet names', async(() => {
    // act
    component.ngOnInit();

    // assert
    expect(component.catModel.catDataCol[0].cats.join()).toBe(
      'Garfield,Jim,Max,Tom'
    );
    expect(component.catModel.catDataCol[1].cats.join()).toBe(
      'Garfield,Simba,Tabby'
    );
  }));

  it('owner gender group will be omitted if there is no cat under that group', async(() => {
    // arrange
    const inputData: AnimalModel[] = JSON.parse(
        `[
            {"name":"Bob","gender":"Male","age":23,
                "pets":[{"name":"Fido","type":"Dog"}]
            },
            {"name":"Jennifer","gender":"Female","age":18,
                "pets":[{"name":"Garfield","type":"Cat"}]
            }
        ]`
    );

    // act
    const filteredData = component.filterCatsByOwnerGender(inputData);

    // assert
    expect(filteredData.length).toBe(1);
    expect(filteredData[0].ownerGender).toBe('Female');
  }));
});
