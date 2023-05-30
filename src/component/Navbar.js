import React from "react";
import logo from "../GateofTruthImages/logo.svg";
import HomeBS from "./HomeBS";
import mission from "../GateofTruthImages/mission.svg";
import Frame from "../GateofTruthImages/Frame.svg";
import videoimg from "../GateofTruthImages/videoimg.svg";
import Artwork from "../GateofTruthImages/Artwork.svg";
import { Typography } from "@mui/material";
import appmask from "../GateofTruthImages/appmask.svg";
import googlemask from "../GateofTruthImages/googlemask.svg";
import UserStories from "./UserStories";
const NavBar = () => {
  return (
    <div
      className="container-fluid"
      // style={{
      //   background: "linear-gradient(to top,#ffffff, #feeeee)",
      // }}
    >
      <div className="row" style={{ backgroundColor: "#ed1c24" }}>
        <div
          className="col-lg-6 col-md-12 "
          style={{ backgroundColor: "#ed1c24" }}
        >
          <div
            style={
              {
                // background: "lightgreen",
                // height: "100px",
              }
            }
          >
            <img src={logo} alt="img 2" width="100%" height={70} />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-none d-md-block"
          style={{ backgroundColor: "#ed1c24" }}
        >
          <div
            style={
              {
                // background: "lightgreen",
                // height: "100px",
              }
            }
          >
            <ul
              className="nav justify-content-end"
              style={{ marginTop: "1rem", color: "white" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white" }}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  GALLARY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  BLOG
                </a>
              </li>
              <li className="nav-item-light">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div
        className="row"
        style={{
          background: "linear-gradient(to top,#ffffff, #feeeee)",
        }}
      >
        <div
          className="col-lg-6 col-md-12  d-flex justify-content-center align-items-center"
          // lg={6}
          // md={6}
          // sm={12}
        >
          <div>
            <Typography>
              <h1
                style={{
                  fontSize: "60px",
                }}
              >
                Nothing is More
                <br /> Important Then
                <strong style={{ color: "#ed1c24" }}>
                  Truth <br />
                  In a World
                </strong>
                That Lies
              </h1>
            </Typography>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
          lg={6}
          // md={6}
        >
          <div
            style={{
              // background: "lightgreen",
              // height: "100px",
              position: "relative",
            }}
          >
            <img
              src={Artwork}
              alt="img2"
              className="img"
              width="100%"
              height="50%"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
          lg={6}
        >
          <div>
            <img
              src={mission}
              alt="img 2"
              className="img"
              width="70%"
              height="70%"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
          lg={6}
        >
          <div>
            <Typography
            // style={
            //   {
            //     // backgroundColor: "yellow",
            //     // marginTop: "15rem",
            //   }
            // }
            >
              <h1>
                <strong>Our</strong>{" "}
                <strong style={{ color: "#ed1c24" }}>mission---------</strong>
              </h1>
              <br />
              <br />
              <strong>
                We bring truth and transparency to a World filled woth lies. Use
                our app as your <br /> tool for knowledge and equip yourself
                with the information you need to make <br /> wise decision i any
                aspect of your life as relationships, business etc.
              </strong>
              <br />
              <br />
              <br />
              <button
                className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
                style={{
                  backgroundColor: "#ed1c24",
                  color: "white",
                  borderRadius: "4rem",
                  width: "9rem",
                  marginRight: "2rem",
                }}
                type="LOGIN"
              >
                Join Us
              </button>
            </Typography>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
          <div className="col d-flex justify-content-center align-items-center">
            <Typography
            // style={{
            //   // backgroundColor: "yellow",
            //   marginTop: "10rem",
            // }}
            >
              <h1>
                <strong>How it</strong>{" "}
                <strong style={{ color: "#ed1c24" }}>Work ---------</strong>
              </h1>
              <br />
              <br />
              <strong>
                We bring truth and transparency to a World filled woth lies. Use
                our app as your <br /> tool for knowledge and equip yourself
                with the information you need to make <br /> wise decision i any
                aspect of your life as relationships, business etc.
              </strong>
              <br />
              <br />
              <br />
              <button
                className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
                style={{
                  backgroundColor: "#ed1c24",
                  color: "white",
                  borderRadius: "4rem",
                  width: "9rem",
                  marginRight: "2rem",
                  // marginBottom: "8rem",
                }}
                type="LOGIN"
              >
                Join Us
              </button>
            </Typography>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div>
            <img
              src={Frame}
              alt="img 2"
              className="img"
              width="80%"
              height="80%"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-12 col-md-12 text-center" lg={12}>
          <div>
            <h1>
              <strong>How it</strong>
              <strong style={{ color: "#ed1c24" }}> App Work</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 " lg={12}>
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src={videoimg}
              alt="img 2"
              className="img "
              width="50%"
              height="50%"
              viewBox="0 0 500 500"
              // style={{ paddingLeft: "15rem" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="col-lg-12 col-md-12 text-center" lg={12}>
          <div style={{ color: "white" }}>
            <h1>Download the App</h1> <br />
            The Gate of Truth is a metaphysical structure which float in an
            endless white expanse, with two doors that
            <br />
            appear like a pair of giant stone tablets with a mural engraved on
            them.
            <br />
            <br />
            <div
              className=" col-lg-12 d-flex justify-content-center align-items-center button-container"
              // style={{ backgroundColor: "GrayText" }}
            >
              <button
                className="btn  boderRadius-8  my-sm-0 "
                style={{
                  backgroundColor: "black",
                  color: "black",
                  borderRadius: "0.5rem",

                  // marginRight: "2rem",

                  width: "13rem",
                }}
                type="LOGIN"
              >
                <img src={googlemask} alt="img 2" width="100%" height={50} />
              </button>
              <button
                className="btn  boderRadius-8  my-sm-0 "
                style={{
                  backgroundColor: "black",
                  color: "black",
                  borderRadius: "0.5rem",

                  // marginRight: "2rem",

                  width: "13rem",
                }}
                type="LOGIN"
              >
                <img src={appmask} alt="img 2" width="100%" height={50} />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-12 col-md-12" lg={12}>
          <div style={{ background: "lightcoral", height: "100px" }}>lg-12</div>
        </div> */}
      </div>
      <div> {<UserStories />}</div>
    </div>
  );
};

export default NavBar;
