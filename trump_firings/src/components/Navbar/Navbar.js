import React from 'react';
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a className="navbar-brand page-refresh" href="">{props.item1}</a>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {props.directions} <span className="sr-only">(current)</span>
        </li>
      </ul>
      <span className="navbar-text score">
        Score: {props.score} | Hi Score: {props.hi_score}
      </span>
    </div>
  </nav>
)

export default Navbar;