import '../assets/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
  <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="title is-3 navbar-item" href="/">
          <Link to="/">
            <span id="links">Traditional Knowledge</span>
          </Link>
        </a>
      </div>
      
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            <Link to="/about">
              <span id="links"> /about </span>
            </Link>
          </a>
          <a className="navbar-item" id="links" href="https://github.com/sujeewasandeepa/traditional-knowledge">
            /source-code
          </a>
        </div>

        <div className="navbar-end mr-2">
          <a className="navbar-item" id="links" href="#">
            <Link to="/login">
              <span id="links">LogIn</span>
            </Link>
          </a>
          <a className="navbar-item" id="links" href="/contact">
            <Link to="/signup">
              <span id="links">Register</span>
            </Link>
          </a>
        </div>
      </div>
    </nav>
  </>
  )
}
