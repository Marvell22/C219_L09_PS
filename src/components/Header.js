import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Diplomas">Diplomas</Link></li>
          <li><Link to="/Register">Register</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
