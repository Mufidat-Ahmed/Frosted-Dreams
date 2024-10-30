import { verify } from "jsonwebtoken";

export default (req: any, res: any, next: any) => {
  const token = req.header.access_token as string;
  if (!token) return res.status(401).send('Access Denied');

  try { const decodedUser = verify(token, process.env.JWT_SECRET!);
    req.user = decodedUser;

  } catch (err) {
    res.status(401).send('Invalid Token');
  }

  return next();
}