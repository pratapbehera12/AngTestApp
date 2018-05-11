import { Injectable } from '@angular/core';
import { ICommonModel } from '../model/common.model';

@Injectable()
export class ConfigService {
    public current: ICommonModel;

    constructor() {
        this.current = {
            jsonDataURL: 'http://agl-developer-test.azurewebsites.net/people.json'
        };
    }
}
