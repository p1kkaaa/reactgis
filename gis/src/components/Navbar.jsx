import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand animate__animated animate__fadeInLeft wow" href="#">
        GIS pro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav animate__animated animate__fadeInRight wow">
            {[
              "Новости",
              "О нас",
              "Проекты",
              "Достижения",
              "Услуги",
              "Реквизиты"
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
