const API_URL = "http://localhost:3333/api";

export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
}

export async function createTask(title: string) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
}

export async function toggleTask(id: number) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
  });

  return response.json();
}

export async function deleteTask(id: number) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
}