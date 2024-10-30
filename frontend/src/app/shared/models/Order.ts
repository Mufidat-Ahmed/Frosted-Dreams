import { CartItems } from './CartItems'; // Adjust the path as necessary

export class Order{
    id!: number;
    name!: string;
    totalPrice!: number;
    items!: CartItems[];
    paymentId!: string;
    CreatedAt!: string;
    status!: string;
    address?: string;
    phone?: number;
}