import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'order-lists',
  templateUrl: './order-lists.component.html',
  styleUrl: './order-lists.component.css'
})
export class OrderListsComponent implements OnInit {
  @Input() order!:Order;
  constructor() {}

  ngOnInit() {}

}
