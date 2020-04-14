import { Request, Response } from 'express';
import Todo from './todo-model';

const todoGetAll = async (_: Request, res: Response) => {
  try {
    const todo = await Todo.find();
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

const todoPost = async (req: Request, res: Response) => {
  const { task, isCompleted } = req.body;
  try {
    const newTodo = await new Todo({
      task,
      isCompleted,
    }).save();
    res.send(newTodo);
  } catch (error) {
    res.status(400).send(error);
  }
};

const todoDelete = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const removedTodo = await Todo.findOneAndDelete({ _id: id });
    res.send(removedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { todoGetAll, todoPost, todoDelete };
