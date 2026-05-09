import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setMsg("Logging in...");

    try {
      const data = await loginUser(form);

      if (!data.success) throw new Error(data.message);

      setMsg("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })} />

      <input placeholder="Password" type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button onClick={handleSubmit}>Login</button>

      <p>{msg}</p>

      <Link to="/register">Go to Register</Link>
    </div>
  );
}