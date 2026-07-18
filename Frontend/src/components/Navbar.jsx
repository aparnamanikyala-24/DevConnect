import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>DevConnect</h2>

      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;