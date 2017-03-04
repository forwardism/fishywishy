import { Injectable } from '@angular/core';

import { Fish } from '../fish';

import 'rxjs/add/operator/toPromise';

const FISH: Fish[] = [
  { id: 1, name: 'Dory', dob: new Date()},
  { id: 2, name: 'Nemo', dob: new Date()}
];




@Injectable()
export class FishingService {

  constructor() { }

  getFishes(): Promise<Fish[]> {
    return Promise.resolve(FISH);
  }

  getFish(id: number): Promise<Fish> {
    return this.getFishes()
      .then(fishes => fishes.find(fish => fish.id === id));
  }


}
