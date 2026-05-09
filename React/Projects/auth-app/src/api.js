const BASE_URL = "/api/v1/users";

export async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 🔥 important
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/current-user`, {
    credentials: "include",
  });

  return res.json();
}

export async function logoutUser() {
  await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
}