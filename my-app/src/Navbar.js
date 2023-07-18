import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="nav">
      <b href="logo">
        <Link to="/uidesignfinal" className="site-title">
          <img src="/uidesignfinal/logo.png" alt="bug" height={50} />
        </Link>
      </b>
      <ul>
        <li>
          <input type="text" placeholder="Search.."></input>
          <Link to="/chat">
            <img src="/uidesignfinal/search.png" class="search" alt=" " />
          </Link>
        </li>

        <li>
          <Link to="/chat">Chats</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/login">Login/Register</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
