"use client";

import { useState } from "react";

interface Props {
  onAddAction: (title: string) => void;
}

export default function TaskForm({ onAddAction }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    onAddAction(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        className="flex-1 border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-900 transition text-white px-6 rounded-lg font-semibold"
      >
        Adicionar
      </button>
    </form>
  );
}