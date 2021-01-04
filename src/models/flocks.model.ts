import {model, Schema, Model, Document} from 'mongoose';

interface IFlock extends Document{
  name: string,
  eggs: number,
  age: number,
  date: string,
  remark: string
}

const flockSchema: Schema = new Schema({
  name:  String, // String is shorthand for {type: String}
  eggs: Number,
  age: Number, // in weeks
  date: { type: Date, default: Date.now },
  remark: String,
});

const Flock: Model<IFlock> = model('Flock', flockSchema );
export default Flock;
