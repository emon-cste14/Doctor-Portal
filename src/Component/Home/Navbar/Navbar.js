import React from 'react';
import '../Navbar/Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 position-absolute top-0 end-0 pb-4">
              <li class="nav-link ml-2">
                <a class="nav-link nav-color1" href="#">Home</a>
              </li>
              <li class="nav-link ml-2">
                <a class="nav-link nav-color1" href="#">About</a>
              </li>
              <li class="nav-link ml-2 nav-color">
                <a class="nav-link" href="#">Dental Services</a>
              </li>
              <li class="nav-link ml-2 nav-color">
                <a class="nav-link" href="#">Reviews</a>
              </li>
              <li class="nav-link ml-2 nav-color">
                <a class="nav-link" href="#">Bloags</a>
              </li>
              <li class="nav-link ml-2 pl-4 nav-color">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;