const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";


// REGISTER
export async function registerUser(data) {

  const users =
    JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const existingUser = users.find(
    (u) => u.email === data.email
  );

  if (existingUser) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  users.push(data);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return {
    success: true,
    message: "Registered successfully",
  };
}


// LOGIN
export async function loginUser(data) {

  const users =
    JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    (u) =>
      u.email === data.email &&
      u.password === data.password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return {
    success: true,
    message: "Login successful",
    user,
  };
}


// CURRENT USER
export async function getCurrentUser() {

  const user =
    JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

  if (!user) {
    return {
      success: false,
      message: "No user logged in",
    };
  }

  return {
    success: true,
    user,
  };
}


// LOGOUT
export async function logoutUser() {

  localStorage.removeItem(CURRENT_USER_KEY);

  return {
    success: true,
    message: "Logged out successfully",
  };
}