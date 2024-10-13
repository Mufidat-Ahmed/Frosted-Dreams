import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/models/Info';
import { BakeService } from '../../../services/bake.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  baked:Info[] = [];

  constructor(private bakeService:BakeService, activatedRoute:ActivatedRoute) {
    let bakedObservable:Observable<Info[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        bakedObservable = this.bakeService.getAllBakesBySearchTerm(params.searchTerm);
      else
      bakedObservable = bakeService.getAll();
    })
    bakedObservable = bakeService.getAll();
    bakedObservable.subscribe((bite) => {
      this.baked = bite;
    })
   }

  ngOnInit(): void {
  }

}
