import { Request, Response } from "express";
import { db } from "../database";

export class TaskController {
  async getTasks(req: Request, res: Response) {
    try {
      const [rows] = await db.query("SELECT * FROM tasks");
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar tasks" });
    }
  }

  async createTask(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }

    try {
      await db.query(
        "INSERT INTO tasks (title, completed) VALUES (?, false)",
        [title]
      );

      res.status(201).json({ message: "Task criada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar task" });
    }
  }

  async toggleTask(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await db.query(
        "UPDATE tasks SET completed = NOT completed WHERE id = ?",
        [id]
      );

      res.json({ message: "Task atualizada" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar task" });
    }
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await db.query("DELETE FROM tasks WHERE id = ?", [id]);
      res.json({ message: "Task removida" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao remover task" });
    }
  }
}
