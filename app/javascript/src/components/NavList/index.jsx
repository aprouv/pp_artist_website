import * as React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/biography"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Biographie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tableaux"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tableaux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
