import api from "./api";

export const fetchTasks = async (token: string) => {
  const res = await api.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createTask = async (
  token: string,
  data: { title: string; priority: string }
) => {
  const res = await api.post("/tasks", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateTask = async (
  token: string,
  taskId: string,
  data: any
) => {
  const res = await api.put(`/tasks/${taskId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteTask = async (token: string, taskId: string) => {
  const res = await api.delete(`/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
