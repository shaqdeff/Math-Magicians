import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="math-magic">
        Math Magicians
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
