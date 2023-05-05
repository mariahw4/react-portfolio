import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Navbar() {
  return (
    <>
    <nav className="navbar sticky-top navbar-light navbar-expand-lg bg-light">
      <div className="row">
    <img src="/react-portfolio/images/self-portrait.png" className="d-inline-block align-top col-1" alt="self-portrait"/>
    <h2 className="col-4">Mariah Wear</h2>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    
    <div className="col-7 collapse navbar-collapse" id="navbarNav">
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
  </div>
</nav>
   </>
  );
}

export default Navbar;
