// src/services/authService.ts
import api from "./api";

interface LoginResponse {
  token: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const register = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/register", credentials);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};
