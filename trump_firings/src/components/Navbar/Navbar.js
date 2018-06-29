import React from 'react';
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="">{props.item1}</a>
      </li>
      <li className="nav-item">
        {props.directions}
      </li>
      <li className="nav-item">
        Score: {props.score} | Hi Score: {props.hi_score}
      </li>
    </ul>
</nav>
)

export default Navbar;