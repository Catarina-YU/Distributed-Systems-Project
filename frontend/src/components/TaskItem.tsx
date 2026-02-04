import { Task } from "@/types/task";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li
      className={`flex justify-between items-center px-4 py-3 rounded-lg border transition
        ${
          task.completed
            ? "bg-purple-100 text-purple-400 line-through"
            : "bg-purple-50 text-purple-700"
        }`}
    >
      <span
        onClick={() => onToggle(task.id)}
        className="cursor-pointer select-none"
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-purple-500 hover:text-red-500 font-bold transition"
      >
        ✕
      </button>
    </li>
  );
}