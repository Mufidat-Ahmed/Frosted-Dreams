import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent implements OnInit{


  @Input() type: 'submit' | 'button' = 'submit';
  @Input() text:string = 'Submit';
  @Input() bgColor = '#b0eacd';
  @Input() color = '#6b4226';
  @Input() fontSize = 1.5;
  @Input() widthRem = 12;
  @Output() onClick = new EventEmitter<void>();
  constructor(){}

  ngOnInit(): void {
    
  }

  handleClick() {
    if (this.type === 'button') {
      this.onClick.emit();
    }
  }

}
