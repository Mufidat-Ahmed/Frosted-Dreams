import dotenv from 'dotenv';
dotenv.config();



import express from 'express';
import cors from 'cors';
import dataRouter  from './router/data.router';
import userRouter from './router/user.router';
import { dbConnect } from './config/db.config';
import orderRouter from './router/order.router';

dbConnect();

const app = express();
app.use(express.json());
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://frosteddreams.onrender.com'] 
  : ['http://localhost:4200'];

app.use(cors({
  credentials: true,
  origin:["http://localhost:4200"]
}));

app.use("/api/data", dataRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
})