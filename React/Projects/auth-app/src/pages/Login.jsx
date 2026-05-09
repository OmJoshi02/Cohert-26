import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {

    setMsg("Logging in...");

    try {

      const data = await loginUser(form);

      if (!data.success) {
        throw new Error(data.message);
      }

      setMsg("Login successful!");

      navigate("/dashboard");

    } catch (err) {

      setMsg(err.message);

    }
  };

  return (
    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button onClick={handleSubmit}>
        Login
      </button>

      <p>{msg}</p>

      <Link to="/register">
        Go to Register
      </Link>

    </div>
  );
}