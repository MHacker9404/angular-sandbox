// import  {Request, Response, NextFunction} from 'express';
import { RequestHandler } from "express";
import  Todo from '../models/todo';

const todos:Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text:string}).text;
    const newTodo: Todo = new Todo(Math.random(), text);

    todos.push(newTodo);

    res.status(201).json({ message: 'Created the todo', createTodo: newTodo });
 };