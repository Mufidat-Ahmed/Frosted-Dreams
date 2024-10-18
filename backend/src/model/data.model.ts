import { model, Schema } from "mongoose";

export interface Data {
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  stars: number;
  imageUrl: string;
  desc: string[];
  bakeTime: string;
}

export const DataSchema = new Schema<Data> ({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  tags: {type: [String]},
  favorite: {type: Boolean, required: true},
  stars: {type: Number, required: true},
  imageUrl: {type: String, required: true},
  desc: {type: [String], required: true},
  bakeTime: {type: String, required: true},
},{
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  timestamps: true,
}
);

export const DataModel = model<Data>("data", DataSchema);