import { PeopleModel } from '../model/people.model';
export class CatsModel {
    public catDataCol: PeopleModel[];
    public error: boolean;

    constructor() {
        this.catDataCol = [];
        this.error = false;
    }
}
