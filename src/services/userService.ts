// src/services/userService.ts
import api from "./api";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UsersResponse {
  data: User[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

export const getUsers = async (page: number = 1): Promise<UsersResponse> => {
  try {
    const response = await api.get<UsersResponse>(`/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (id: number): Promise<User> => {
  try {
    const response = await api.get<{ data: User }>(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
};

export const userService = {
  async fetchUsers() {
    const response = await axios.get("https://reqres.in/api/users");
    return response.data;
  },
};
