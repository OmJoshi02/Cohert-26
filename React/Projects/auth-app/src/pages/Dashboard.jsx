import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const data = await getCurrentUser();

      if (!data.success) {
        navigate("/");
      } else {
        setUser(data.data);
      }
    }

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {user ? (
        <p>
          {user.username} | {user.email}
        </p>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}