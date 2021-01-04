import express from 'express';
import Flock from '../models/flocks.model';

const router = express.Router();

router.get('/',async (req, res) => {
  try{
    const flocks = await Flock.find({});
    res.status(200).json({
      text: 'Get all flocks',
      data: flocks
    })
  }catch(err){
    console.error(err);
    res.status(500).json({
      text: 'Failed to get flocks',
      err
    })
  }
})


router.post('/', async(req, res) => {
  const {name, eggs, age, date, remark} = req.body;
  try{
    const flock = await Flock.create({
      name,
      eggs,
      age,
      date,
      remark
    });
    res.status(201).json({
      text: 'Flock created successfully',
      data: flock
    });
  }
  catch(err){
    console.error(err);
    res.status(500).json({
      text: 'Failed to get flocks',
      err
    })
  }
})

export default router;
