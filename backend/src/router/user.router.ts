import Router from "express";
import { userData } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { UserModel } from "../model/user.model";


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
  const user = await UserModel.findOne({email, password});

    if(user){
      res.send(gtResponse(user));
    }else{
      res.status(400).send("User name or password is incorrect");
    }

}
))

const gtResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email,
    isAdmin: user.isAdmin
  }, "secret", { expiresIn: "30d" });

  user.token = token;
  return user;
}

export default router;