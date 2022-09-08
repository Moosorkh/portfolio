import React from 'react';
import logo from "../logo.JPG";

const navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar