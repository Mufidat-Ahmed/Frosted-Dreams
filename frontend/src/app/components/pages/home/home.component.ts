import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/models/Info';
import { BakeService } from '../../../services/bake.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  baked:Info[] = [];

  constructor(private bakeService:BakeService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.baked = this.bakeService.getAllBakesBySearchTerm(params.searchTerm);
      else
      this.baked = bakeService.getAll();
    })
    this.baked = bakeService.getAll();
   }

  ngOnInit(): void {
  }

}
