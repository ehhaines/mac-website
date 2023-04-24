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
      <a className="navbar-brand px-3" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
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
            <a className="nav-link" href="/resources">Resources</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;