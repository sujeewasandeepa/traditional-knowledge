import '../assets/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
  <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <Link to="/" className='title is-3 navbar-item'>
        <span id="links">Traditional Knowledge</span>
      </Link>
      </div>
      
      <div className="navbar-menu">
        <div className="navbar-start">
        <Link to="/about" className='navbar-item'>
          <span id="links"> /about </span>
        </Link>
          <a className="navbar-item" id="links" href="https://github.com/sujeewasandeepa/traditional-knowledge">
            /source-code
          </a>
        </div>

        <div className="navbar-end mr-2">
        <Link to="/login" className='navbar-item' id="links">
          <span id="links">LogIn</span>
        </Link>
        <Link to="/signup" className='navbar-item' id="links">
          <span id="links">Register</span>
        </Link>
        </div>
      </div>
    </nav>
  </>
  )
}
