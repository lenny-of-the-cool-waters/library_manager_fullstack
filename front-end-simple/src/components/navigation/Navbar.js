import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a href="#" className="navbar-brand">
          LEO'S LIB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ml-auto mr-1">
            <li className="nav-item">
              <a href="#" className="nav-link text-light">
                Summary
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-light">
                Order by
              </a>
            </li>
          </ul>
          <form className="d-flex ml-1">
            <input
              className="form-control mr-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit" id="searchButton">
              <ion-icon name="search-outline" className="search-icon"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
