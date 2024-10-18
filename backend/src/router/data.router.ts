import { Router } from 'express';
import { Data } from '../data';
import asyncHandler from 'express-async-handler';
import { DataModel } from '../model/data.model';

const router = Router();

router.get('/seed', asyncHandler(async (req, res) => {
  const datacount = await DataModel.countDocuments();
  if(datacount > 0){
    res.send("Data already seeded");
    return;
  }
  await DataModel.create(Data);
  res.send("Seed is Successfull");
}))


router.get('/', asyncHandler(async (req, res) => {
  const data = await DataModel.find();
  res.send(data);
}))

router.get("/search/:searchTerm", asyncHandler(async(req, res) => {
  const searchRegex = new RegExp(req.params.searchTerm, "i");
  const data = await DataModel.find({name: {$regex: searchRegex}});
  res.send(data);
}))

router.get("/:bakeId", asyncHandler(async(req, res) => {
  const data = await DataModel.findById(req.params.bakeId);
  res.send(data);
}))


export default router;