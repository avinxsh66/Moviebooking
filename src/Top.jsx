import React from "react";
//import p1logo from './p1-logo.png';
const Top = () => {
  return (
    <header>
      <div className="logo">
        {/* <img src="" alt="Logo" /> */}
        <h1>Book Tikckets</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Movies</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className="dropdown">
            <a href="/categories">Categories &#9662;</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Top;
