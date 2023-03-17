import React from "react";


const EnrollmentComponent = () => {

  return (
    <div>
      <div className="container">
        <div style={{
          height: "100px"
        }}></div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-4"><b>Address:</b></div>
              <div className="col">
                <div>Mililani District Park Gymnasium</div>
                <div>94-1150 Lanikuhana Ave.</div>
                <div>Mililani, HI 96789</div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-4"><b>Schedule:</b></div>
              <div className="col">
                <div>Tuesdays and Thursdays</div>
                <div>7:00pm to 8:30pm</div>
              </div>
            </div>
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3713.714277017345!2d-158.0181700202396!3d21.440472799853943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1679075248763!5m2!1sen!2sus" width="600" height="450" title="map-med" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentComponent;