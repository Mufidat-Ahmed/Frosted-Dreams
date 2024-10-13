import express from 'express';
import cors from 'cors';
import { Data } from './data';

const app = express();
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
}
)

const port = 5000;
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
})