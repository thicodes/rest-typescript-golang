import mongoose, { Document, Model } from 'mongoose';

const schema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: 'todo',
  },
);

export interface ITodo extends Document {
  task: string;
  isCompleted: boolean;
}

const TodoModel: Model<ITodo> = mongoose.model('Todo', schema);

export default TodoModel;
