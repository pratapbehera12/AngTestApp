import { Injectable } from '@angular/core';
import { AnimalModel } from '../model/animal.model';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { ICommonModel } from '../model/common.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IApiService } from '../service/iapi.service';
import { ConfigService } from '../service/config.service';

@Injectable()
export class ApiService implements  IApiService{
    constructor(private _http: Http,
        private _config: ConfigService
    ){}
   
    public getItems(): Observable<AnimalModel[]> {
        return this._http.get(this._config.current.jsonDataURL)
            .catch((err: Response) => {
                console.error(err);
                return Observable.throw(err.json());
            })
            .map((response) => response.json() as AnimalModel[]);
    } 
    
}
