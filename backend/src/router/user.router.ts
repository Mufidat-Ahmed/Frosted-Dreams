import Router from "express";
import { userData } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../model/user.model";
import bcrypt from 'bcryptjs';

const router = Router();

router.get('/seed', asyncHandler(async (req, res) => {
  const usercount = await UserModel.countDocuments();
  if(usercount > 0){
    res.send("Data already seeded");
    return;
  }
  await UserModel.create(userData);
  res.send("Seed is Successfull");
}))


router.post("/login", asyncHandler(async(req, res) =>{
  const body = req.body;
  const {email, password} = req.body;
  const user = await UserModel.findOne({ email });

    if(user && await bcrypt.compare(password, user.password)){
      res.send(gtResponse(user));
    }else{
      res.status(400).send("User name or password is incorrect");
    }

}
))

router.post('/register', asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  const user = await UserModel.findOne({email});
  if(user){
    res.status(400).send('User already exist')
    return;
  }

  const encryptPassword = await bcrypt.hash(password, 10);
  const newUser:User = {
    id:'',
    name,
    email:email.toLowerCase(),
    password: encryptPassword,
    isAdmin: false
  }

  const dbUser = await UserModel.create(newUser);
  res.send(gtResponse(dbUser))
}
))

const gtResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email,
    isAdmin: user.isAdmin
  }, "secret", { expiresIn: "30d" });

  user.password = undefined;
  user.token = token;
  return user;
}

export default router;