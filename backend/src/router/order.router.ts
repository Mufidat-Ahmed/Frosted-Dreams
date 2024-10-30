import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { OrderStatus } from '../orderstaus';
import { OrderModel } from '../model/order.model';
import auth from '../auth.mid';

const router = Router();
router.use(auth);

router.post('/create', asyncHandler(async (req:any, res:any) => {
  const requestOrder = req.body;

  if(requestOrder.items.length <= 0) {
    res.status(400).send('Cart Is Empty!');
    return;
  }
  await OrderModel.deleteOne({
    user: req.user.id, status: OrderStatus.NEW
  });

  const newOrder = new OrderModel({...requestOrder, user: req.user.id});
  await newOrder.save();
  res.send(newOrder);
})
)

export default router;