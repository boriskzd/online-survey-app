import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      Navbar
      <Link to='/'>Home</Link> <Link to='/success'>Success</Link>
    </nav>
  );
}
