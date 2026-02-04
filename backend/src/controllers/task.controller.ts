import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

const service = new TaskService();

export class TaskController {
  getTasks(req: Request, res: Response) {
    return res.json(service.getAll());
  }

  createTask(req: Request, res: Response) {
    const { title } = req.body;
    const task = service.create(title);
    return res.status(201).json(task);
  }

  toggleTask(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = service.toggle(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json(task);
  }

  deleteTask(req: Request, res: Response) {
    const id = Number(req.params.id);
    service.delete(id);
    return res.status(204).send();
  }
}