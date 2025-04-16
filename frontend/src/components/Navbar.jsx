import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg ">
      <div className="container-fluid content-container">


        <div className="d-flex justify-content-start">
          <Link className="navbar-title" to="/">
            By Night
          </Link>
        </div>


        <div className="d-flex justify-content-end">

          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
          <div className="dropdown d-lg-none">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
