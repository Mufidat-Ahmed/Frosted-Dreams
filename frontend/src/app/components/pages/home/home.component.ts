import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/models/Info';
import { BakeService } from '../../../services/bake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  baked:Info[] = [];

  constructor(private bakeService:BakeService) {
    this.baked = bakeService.getAll();
   }

  ngOnInit(): void {
  }

}
