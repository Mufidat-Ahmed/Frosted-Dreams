import {model, Schema, Types} from 'mongoose';
import { Data, DataSchema } from './data.model';
import { OrderStatus } from '../orderstaus';

export interface LatLng{
  lat: string;
  lng: string;
}

export const LatLngSchema = new Schema<LatLng>({
  lat: {type: String, required: true},
  lng: {type: String, required: true},
});

export interface OrderItem{
  bake: Data;
  price: number;
  quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>({
  bake: {type: DataSchema, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
});

export interface Order{
  id: number;
  name: string;
  totalPrice: number;
  items: OrderItem[];
  paymentId: string;
  createdAt: Date;
  status: OrderStatus;
  address: string;
  phone: number;
  user: Types.ObjectId;
  updatedAt: Date;
   
}
const OrderSchema = new Schema<Order>({
  name: {type: String, required: true},
  address: {type: String, required: true},
  phone: {type: Number, required: true},
  paymentId: {type: String},
  items: {type: [OrderItemSchema], required: true},
  totalPrice: {type: Number, required: true},
  status: {type: String, default: OrderStatus.NEW},
  user: {type: Schema.Types.ObjectId, required: true},
},{
  timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}
});

export const OrderModel = model<Order>('Order', OrderSchema);