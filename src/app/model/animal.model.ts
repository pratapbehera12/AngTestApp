import { Pet } from './pets.model';
export interface  AnimalModel {
    name: string;
    gender: string;
    age: number;
    pets:Pet[];
}
