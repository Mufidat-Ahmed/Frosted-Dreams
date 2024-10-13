import express from 'express';
import cors from 'cors';
import { Data, userData } from './data';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin:["http://localhost:4200"]
}));

app.get('/api/data', (req, res) => {
  res.send(Data);
})

app.get("/api/data/search/:bakeTerm", (req, res) => {
  const searchTerm = req.params.bakeTerm;
  const data = Data.filter(bake => bake.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));
  res.send(data);
})

app.get("/api/data/:bakeId", (req, res) => {
  const bakeId = req.params.bakeId;
  const bake = Data.find(bake => bake.id === bakeId);
  res.send(bake);
})

app.post("/api/users/login", (req, res) =>{
  const body = req.body;
  const {email, password} = req.body;
  const user = userData.find(user => user.email === body.email && 
    user.password === body.password);

    if(user){
      res.send(gtResponse(user));
    }else{
      res.status(400).send("User name or password is incorrect");
    }

})

const gtResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email,
    isAdmin: user.isAdmin
  }, "secret", { expiresIn: "30d" });

  user.token = token;
  return user;
}

const port = 5000;
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
})