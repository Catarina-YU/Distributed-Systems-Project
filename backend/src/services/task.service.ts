import { Task } from "../types/task";

let tasks: Task[] = [];

export class TaskService {
  getAll(): Task[] {
    return tasks;
  }

  create(title: string): Task {
    const task: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    tasks.push(task);
    return task;
  }

  toggle(id: number): Task | null {
    const task = tasks.find((t) => t.id === id);
    if (!task) return null;

    task.completed = !task.completed;
    return task;
  }

  delete(id: number): boolean {
    const initialLength = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);

    return tasks.length < initialLength;
  }
}