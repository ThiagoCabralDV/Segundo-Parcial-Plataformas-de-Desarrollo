import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Inventario</h2>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
