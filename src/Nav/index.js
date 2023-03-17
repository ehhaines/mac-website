import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavComponent() {
  return(
    <nav className="position-fixed navbar navbar-expand-lg display-6 w-100" style={{
      backgroundColor: "rgba(255, 255, 255, .15)",
      backdropFilter: "blur(10px)",
      zIndex: "100"
    }}>
      <div className="collaps navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="/"><FontAwesomeIcon icon={faHouse}/></a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/enrollment">Enrollment Info</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/current-students">Current Students</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;