import { connect } from 'mongoose';

export const dbConnect = () => {
  connect(process.env.MONGO_URI!).then(() => console.log("Connected Successfully"))
    .catch((error) => console.log(error));
}