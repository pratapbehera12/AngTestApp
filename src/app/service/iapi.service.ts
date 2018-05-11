import { Observable } from 'rxjs/Observable';
import { AnimalModel } from '../model/animal.model';

export abstract class IApiService {
    public abstract getItems(): Observable<AnimalModel[]>;
}
