"use client";

import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} from "@/services/api";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAdd(title: string) {
    const newTask = await createTask(title);
    setTasks((prev) => [...prev, newTask]);
  }

  async function handleToggle(id: number) {
    const updatedTask = await toggleTask(id);
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? updatedTask : t))
    );
  }

  async function handleDelete(id: number) {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <main className="w-full max-w-5xl mx-auto px-10 py-14 text-white">
      <h1 className="text-4xl font-bold text-center mb-2">
        Gerenciador de Tarefas
      </h1>

      <p className="text-center text-purple-200 mb-8">
        Organize suas tarefas diárias de forma simples e eficiente.
      </p>

      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
        <TaskForm onAddAction={handleAdd} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}