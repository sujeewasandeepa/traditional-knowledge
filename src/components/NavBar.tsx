import '../assets/NavBar.css'

export default function NavBar () {
  return (
  <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="title is-3 navbar-item" href="/">
          Traditional Knowledge
        </a>
      </div>
      
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/about">
            /about
          </a>
          <a className="navbar-item" href="https://github.com/sujeewasandeepa/traditional-knowledge">
            /source-code
          </a>
        </div>

        <div className="navbar-end mr-2">
          <a className="navbar-item" href="/about">
            LogIn 
          </a>
          <a className="navbar-item" href="/contact">
            Register 
          </a>
        </div>
      </div>
    </nav>
  </>
  )
}
