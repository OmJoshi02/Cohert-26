import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {

    setMsg("Registering...");

    try {

      const data = await registerUser({
        ...form,
        role: "ADMIN",
      });

      if (!data.success) {
        throw new Error(data.message);
      }

      setMsg("Registered successfully!");

      navigate("/");

    } catch (err) {

      setMsg(err.message);

    }
  };

  return (
    <div>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
      />

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
        Register
      </button>

      <p>{msg}</p>

    </div>
  );
}