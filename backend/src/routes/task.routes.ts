import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router();
const controller = new TaskController();

router.get("/tasks", controller.getTasks);
router.post("/tasks", controller.createTask);
router.patch("/tasks/:id", controller.toggleTask);
router.delete("/tasks/:id", controller.deleteTask);

export default router;