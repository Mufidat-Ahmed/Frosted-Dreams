import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/models/Info';
import { ActivatedRoute } from '@angular/router';
import { BakeService } from '../../../services/bake.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  bake!: Info;
  constructor(activatedRoute:ActivatedRoute, bakeService:BakeService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.bake = bakeService.getBakeById(params.id);
    })
   }

  ngOnInit(): void {
  }

}
