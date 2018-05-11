import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AnimalModel } from '../model/animal.model';
import { PeopleModel } from '../model/people.model';
import { CatsModel } from '../model/cats.model';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import * as _ from 'lodash';
import { IApiService } from '../service/iapi.service';


@Component({
    selector: 'app-catgroup',
    templateUrl: './catgroup.component.html',
    styleUrls: ['./catgroup.component.css']
})
export class CatgroupComponent implements OnInit {
    public catModel: CatsModel
 
    constructor(private api: IApiService) {
    
        this.catModel = new CatsModel();
    }
   
    filterCatsByOwnerGender(data: AnimalModel[]): PeopleModel[] {
        const returnData: PeopleModel[] = [];
        if (data !== undefined) {

            const reducedData = _.reduce(data, function (result, owner) {
                const petCats = _.filter(owner.pets, { 'type': 'Cat' });
                _.forEach(petCats, function (value) {
                    if (!result[owner.gender]) {
                        result[owner.gender] = [];
                    }
                    result[owner.gender].push(value.name);
                });
                return result;
            }, {});

            _.forEach(reducedData, function (value, key) {
                returnData.push({
                    ownerGender: key,
                    cats: _.sortBy(value)
                });
            });
        }

        return returnData;
    }
  
    ngOnInit() {
        this.api.getItems().subscribe((data) => {
            this.catModel.catDataCol = this.filterCatsByOwnerGender(data);
        }, (err) => {
            console.error(err);
            this.catModel.error = true;
        });
    }

}
