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
}
