// src/composables/useAuth.ts
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectIsAuthenticated,
  selectToken,
} from "../store/userStore";
import { AppDispatch } from "../store/store";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(selectIsAuthenticated); // Get auth state from store
  const token = useSelector(selectToken);

  const handleLogin = (token: string) => {
    dispatch(login(token));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    isAuthenticated,
    token,
    handleLogin,
    handleLogout,
  };
};
