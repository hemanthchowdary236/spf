import express, {Application, Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import routers
import flockRouter  from './routers/flock.routes';

// get env variables from .env into process.env using dotenv module
dotenv.config();

// Instantiate express app
const app:Application = express();

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// body parser middleware
app.use(express.json());



app.get('/', function (req: Request, res: Response){
  res.send('Welcom spf-api!');
})

app.use('/flock', flockRouter);


app.listen(PORT, () => {
  mongoose.connect(`${process.env.MONGODB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log(`server is running at http://localhost:${PORT} and DB connected`);
    })
    .catch(err => {
      console.error('Server connected. DB failed to connect');
      console.error(err);
    })
})

