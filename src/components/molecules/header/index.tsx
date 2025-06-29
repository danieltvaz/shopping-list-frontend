import "./styles.css";

import useAuth from "../../../utils/auth-handler";
import { useNavigate } from "react-router";

export default function Header() {
  const { getUserData, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="header__wrapper">
      <div>
        <p>Welcome back, {getUserData()?.name.toLocaleUpperCase()}</p>
      </div>
      <nav>
        <button className="header__logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
