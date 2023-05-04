import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Navbar() {
  return (
    <>
    <nav className="navbar sticky-top navbar-light navbar-expand-lg bg-light">
    <img src="/images/self-portrait.png" width="90" height="90" className="d-inline-block align-top" alt="self-portrait"/>
    <h2>Mariah Wear</h2>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#About-Me">About Me <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact-Me">Contact Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Resume">Resume</a>
      </li>

    </ul>
  </div>

</nav>

   </>
  );
}

export default Navbar;
