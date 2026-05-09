export const registerUser = async (userData) => {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  users.push(userData);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  return {
    success: true,
    message: "User registered successfully",
  };
};


export const loginUser = async ({ email, password }) => {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(user)
  );

  return {
    success: true,
    message: "Login successful",
    user,
  };
};