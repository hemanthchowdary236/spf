import express, {Application, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv'
dotenv.config();

const app:Application = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req: Request, res: Response){
  res.send('App is running');
})

app.listen(PORT, () => {
  console.log('server is running at port 3000');
})

