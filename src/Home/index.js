import React from "react";

function HomeComponent() {

  return (
    <div style={{
      backgroundImage: "url(/sakura.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "relative",
      backgroundPosition: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <div className="display-2 py-3" style={{
        backgroundColor: "rgba(255, 255, 255, .15)",
        backdropFilter: "blur(4px)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        textShadow: "2px 2px 10px #FFFFFF"
      }}>
        Mililani Aikido Club
      </div>
      <div className="h-100 display-6">
        <p className="my-3">Aloha, and welcome to the Mililani Aikido Club!</p>
        <p>We are a close knit group of Aikido practitioners based in Mililani, HI. Please feel free to reach out if you have any questions. Otherwise, we appreciate your interest in our club!</p>
      </div>
    </div>
  );

}

export default HomeComponent;