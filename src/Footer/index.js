import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const FooterComponent = () => {

  let url = "https://github.com/ehhaines";

  return(
    <div className="bg-dark text-secondary" style={{
      height: "25vh",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      minHeight: "100px",
      maxHeight: "150px"
    }}>
      <p>Made with <FontAwesomeIcon icon={faHeart} style={{color: "#FA7878"}}/> by <span onClick={() => window.location.href = url} style={{
        cursor: "pointer"
      }}>ehhaines</span></p>
    </div>
  );
}

export default FooterComponent;