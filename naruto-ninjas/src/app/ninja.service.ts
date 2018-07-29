import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  ninjas: Ninja[];

  constructor() {
    let ninja1 = new Ninja(1, [1, 2, 3]);
    let ninja2 = new Ninja(2, [3, 2, 1]);
    let ninja3 = new Ninja(3, [2, 1, 3]);

    this.ninjas = [ninja1, ninja2, ninja3];
  }

  getNinja(id: number): Ninja {
    return this.ninjas.find(ninja => ninja.id === id);
  }
}

export class Ninja {
  id: number;
  skills: number[];

  constructor(
    id: number, skills: number[]) {
      this.id = id;
      this.skills = skills;
  }
}
