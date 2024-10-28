import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent implements OnInit{


  @Input()
  label!:string;
  @Input()
  bgColor = '#b0eacd';


  constructor(){}

  ngOnInit(): void {
    
  }

}
