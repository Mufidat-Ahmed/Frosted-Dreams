import { Injectable } from '@angular/core';
import { Data } from '../../data';
import { Info } from '../shared/models/Info';

@Injectable({
  providedIn: 'root'
})
export class BakeService {

  constructor() { }

  getAll():Info[]{
    return Data;
  }

  getAllBakesBySearchTerm(bakeTerm:string){
    return this.getAll().filter(bake => bake.name.toLowerCase().includes(bakeTerm.toLowerCase()));
  }
}
