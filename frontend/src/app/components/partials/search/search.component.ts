import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BakeService } from '../../../services/bake.service';
import { Info } from '../../../shared/models/Info';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = ''; // Holds the search term
  baked: Info[] = []; // Holds the baked items

  constructor(private bakeService: BakeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to the route parameters
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm; // Update searchTerm
        this.fetchSearchResults(this.searchTerm);
      }
    });
  }

  fetchSearchResults(term: string): void {
    // Fetch search results based on the search term
    this.bakeService.getAllBakesBySearchTerm(term).pipe(
      catchError((error) => {
        console.error('Error fetching baked items:', error);
        return []; // Return an empty array on error
      })
    ).subscribe((items) => {
      this.baked = items; // Update the baked array
    });
  }

  search(term: string): void {
    // Navigate to the search route with the search term
    if (term) {
      this.router.navigate(['/search', term]);
    }
  }
}
