import { Client, Status } from "../types";

function setClient({ password, user }: Client) {
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("password", password);
}

function getClient() {
  const user = sessionStorage.getItem("user");
  const password = sessionStorage.getItem("password");

  return { user, password };
}

function logout() {
  sessionStorage.clear();
}

function isAuthenticated() {
  const user = sessionStorage.getItem("user");
  const password = sessionStorage.getItem("password");
  if (user && password) return true;
  return false;
}

export { setClient, getClient, logout, isAuthenticated };
