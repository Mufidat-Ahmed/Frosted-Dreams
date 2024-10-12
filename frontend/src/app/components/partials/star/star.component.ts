import { Component, Input } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {

  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }

  getStarImage(current: number): string{
    const old = current - 0.5;
    const ImageName = this.stars >= current ? 'fullStar' : this.stars >= old 
    ? 'halfStar' : 'emptyStar';
    return `stars/${ImageName}.svg`;
  }
}
