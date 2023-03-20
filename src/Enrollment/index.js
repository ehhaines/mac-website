import React from "react";

import FooterComponent from "../Footer";

import "./index.css";
import "../vertical_center.css";


const EnrollmentComponent = () => {

  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3713.714277017345!2d-158.0181700202396!3d21.440472799853943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1679075248763!5m2!1sen!2sus";

  return (
    <div className="bg-light">
      <div className="container border-bottom text-secondary">
        <div className="eh-xsmall-map eh-vertical-center" style={{
          height: "100vh",
          minHeight: "675px"
        }}>
          <div className="row">
            <div><b>Address: </b></div>
            <br></br>
            <div>Mililani District Park Gymnasium</div>
            <div>94-1150 Lanikuhana Ave.</div>
            <div>Mililani, HI 96789</div>
          </div>
          <br></br>
          <div className="row">
            <div><b>Schedule:</b></div>
            <br></br>
            <div>Tuesdays and Thursdays</div>
            <div>7:00pm to 8:30pm</div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <iframe src={`${map}`} title="smallMap" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="eh-small-map eh-vertical-center" style={{
          height: "100vh",
          minHeight: "600px"
        }}>
          <div className="row">
            <div className="col-3">
              <div><b>Address:</b></div>
            </div>
            <div className="col-3">
              <div>Mililani District Park Gymnasium</div>
              <div>94-1150 Lanikuhana Ave.</div>
              <div>Mililani, HI 96789</div>
            </div>
            <div className="col-3">
              <div><b>Schedule:</b></div>
            </div>
            <div className="col">
              <div>Tuesdays and Thursdays</div>
              <div>7:00pm to 8:30pm</div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
          <iframe src={`${map}`} title="smallMap" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row eh-med-map" style={{
          height: "100vh",
          minHeight: "625px"
        }}>
          <div className="col-5 eh-vertical-center">
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
          <div className="col eh-vertical-center">
            <iframe src={`${map}`} width="600" height="450" title="map-med" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div className="container eh-vertical-center border-bottom" style={{
        textAlign: "left",
        height: "100vh",
        minHeight: "600px"
      }}>
        <div className="display-3 text-secondary"><b>Fees and Donations</b></div>
        <br></br>
        <br></br>
        <div className="row display-6 text-secondary">
          <div className="col-6">Initial Membership Fee:</div>
          <div className="col">
            <div>Children* - $15</div>
            <div>Adults - $20</div>
          </div>
        </div>
        <p className="text-secondary">Upon paying the initial membership fee, individuals will receive a Mililani Aikido t-shirt and patch to eventually sew onto their uniforms.</p>
        <br></br>
        <div className="row">
          <div className="display-6 text-secondary col-6">Suggested Monthly Donations:</div>
          <div className="text-secondary display-6 col" style={{
            textAlign: "left"
          }}>
            <div>Children* - $10</div>
            <p>Adults - $15</p>
          </div>
        </div>
        <div className="text-secondary pb-2">*Human beings aged 6 to 15 years old</div>
        <div className="text-secondary">
          **References to any fees on official dojo forms or documents are to be considered suggested donations unless otherwise specified. Donations are used to defray administrative, insurance, supplies, and other incidental costs the dojo may accrue. Payment is <b>NOT</b> mandatory for dojo membership.
        </div>
      </div>

      <div className="container eh-vertical-center text-secondary border-bottom" style={{
        textAlign: "left",
        height: "100vh",
        minHeight: "600px"
      }}>
        <div className="display-3"><b>First Class Checklist</b></div>
        <br></br>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 display-6">
            <ul>
              <li>Arrive 15 minutes before class starts</li> 
              <li>Fill out <a href="/aikido_enrollment_1.pdf" target={"_blank"}>Enrollment Form 1</a> and <a href="/aikido_enrollment_2.pdf" target={"_blank"}>Enrollment Form 2</a></li>
              <li>Come dressed in sweatpants and a t-shirt</li>
              <li>Bring a bottle of water</li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="pb-3">A senior student will volunteer to work with new students to acclimate them to dojo protocol and warm-up exercises on their first day. In the following classes, students will cover falling and rolling techniques that emphasize safety. Thereafter, basic techniques will be taught.</div>
        <div className="pb-3">It may take three months or so of classes to work through this process. We thus enourage new students to take this time to make an informed decision on whether aikido is a good fit or not. Only after ensuring that Aikido is a good fit should one purchase a uniform.</div>
        <div>The Mililani Aikido Club follows an open enrollment policy, so students can join at any point throughout the year. For safety reasons, students must be at least 6 years old to join.</div>
      </div>

      <div className="display-6 text-secondary eh-vertical-center" style={{
        backgroundColor: "#FA7878",
        height: "20vh"
      }}>
        <b>Questions?</b> Email us at: mililaniaikido@gmail.com
      </div>
      <FooterComponent/>
    </div>
  );
}

export default EnrollmentComponent;