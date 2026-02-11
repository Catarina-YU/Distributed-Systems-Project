import { Request, Response } from "express";
import { pool } from "../database";

export class TaskController {
  async getTasks(req: Request, res: Response) {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  }

  async createTask(req: Request, res: Response) {
    const { title } = req.body;

    const [result]: any = await pool.query(
      "INSERT INTO tasks (title, completed) VALUES (?, ?)",
      [title, false]
    );

    res.json({
      id: result.insertId,
      title,
      completed: false,
    });
  }

  async toggleTask(req: Request, res: Response) {
    const { id } = req.params;

    await pool.query(
      "UPDATE tasks SET completed = !completed WHERE id = ?",
      [id]
    );

    res.sendStatus(204);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.sendStatus(204);
  }
}
