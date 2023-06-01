import React from "react";
import logo from "../GateofTruthImages/logo.svg";
import HomeBS from "./HomeBS";
import mission from "../GateofTruthImages/mission.svg";
import Frame from "../GateofTruthImages/Frame.svg";
import videoimg from "../GateofTruthImages/videoimg.svg";
import Artwork from "../GateofTruthImages/Artwork.svg";
import { ToggleButton, Typography } from "@mui/material";
import appmask from "../GateofTruthImages/appmask.svg";
import googlemask from "../GateofTruthImages/googlemask.svg";
import UserStories from "./UserStories";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(to top,#ffffff, #feeeee)",
      }}
    >
      <div className="row" style={{ backgroundColor: "#ed1c24" }}>
        <div
          className="col-lg-6 col-md-6 col-sm- col-xs-6 d-flex justify-content-left align-items-left "
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
            <img
              // className="img float-right"
              src={logo}
              alt="img 2"
              width="100%"
              height={70}
            />
            {/* <ToggleButton
              value="right"
              aria-label="right aligned"
              sx={{
                float: "right",
              }}
            > */}
            {/* <FormatAlignRightIcon
              fontSize="large"
              sx={{
                float: "right",
                justifyContent: "center",
              }}
            /> */}
            {/* </ToggleButton> */}
            {/* <ToggleButton value="right" aria-label="right aligned" /> */}
            {/* <MenuIcon sx={{ float: "right" }} /> */}
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-none d-lg-block"
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
        style={
          {
            // marginTop: "6rem",
            // background: "linear-gradient(to top,#ffffff, #feeeee)",
            // marginBottom: "4rem",
          }
        }
      >
        <div
          className="col-lg-6 col-md-12  d-flex justify-content-center align-items-center"
          // lg={6}
          // md={6}
          // sm={12}
          // style={{ backgroundColor: "red" }}
        >
          <div>
            <Typography>
              <h1
                // style={{ fontFamily: "calibri" }}
                style={{
                  fontSize: "70px",
                  fontFamily: "calibri",

                  // backgroundColor: "black",
                }}
              >
                <b>
                  Nothing Is More
                  <br /> Important Then
                  <strong style={{ color: "#ed1c24" }}>
                    Truth <br />
                    In a World{" "}
                  </strong>
                  That Lies
                </b>
              </h1>
            </Typography>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 px-lg-6 "
          // style={{ marginTop: "6rem" }}
          lg={6}
          // md={6}
        >
          <div
            className="col"
            style={{
              // background: "lightgreen",
              // height: "100px",
              position: "relative",
              // width: "100%",
              // marginBottom: "8rem",
              // marginTop: "8rem",
              // marginBottom: "8rem",
            }}
          >
            <img
              src={Artwork}
              alt="img2"
              className="img mb-4 "
              width="100%"
              height="100%"
              // marginTop="88rem"
              viewBox="0 0 500 500"
              // style={{
              //   // position: "absolute",
              //   top: 0,
              //   left: 0,
              //   width: "100%",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row" style={{ marginTop: "6rem" }}>
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
          lg={6}
        >
          <div>
            <img
              src={mission}
              alt="img 2"
              className="img"
              width="100%"
              height="70%"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
          style={{ marginTop: "6rem" }}
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
              <h1 style={{ fontFamily: "calibri" }}>
                <b>
                  {" "}
                  <strong>Our</strong>{" "}
                  <strong style={{ color: "#ed1c24", fontFamily: "calibri" }}>
                    mission
                  </strong>
                </b>
              </h1>
              <br />
              <strong style={{ fontFamily: "calibri" }}>
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
                  fontFamily: "calibri",
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
      <div className="row" style={{ marginTop: "8rem" }}>
        <div className="col-lg-6 col-md-12 ">
          <div
            className="col d-flex justify-content-center align-items-center"
            // style={{ display: "flex", alignItems: "center" }}
          >
            <Typography
            // style={{
            //   // backgroundColor: "yellow",
            //   marginTop: "10rem",
            // }}
            >
              {/* <div style={{ display: "flex", alignItems: "center" }}> */}
              <h1 style={{ fontFamily: "calibri" }}>
                <b>
                  <span>
                    <strong>How it </strong>
                    <strong style={{ color: "#ed1c24" }}>Work</strong>
                  </span>
                  {/* <div
                      style={{
                        flex: "1",
                        borderTop: "1px solid #000",
                        marginLeft: "10px",
                        marginRight: "900px",
                      }}
                    ></div> */}
                </b>
              </h1>
              {/* </div> */}
              <br />
              {/* <br /> */}
              <strong style={{ fontFamily: "calibri" }}>
                We bring truth and transparency to a World filled woth lies. Use
                our app as <br /> tool for knowledge and equip yourself with the
                information you need to make <br /> wise decision i any aspect
                of your life as relationships, business etc.
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
                  fontFamily: "calibri",
                  // marginBottom: "8rem",
                }}
                type="LOGIN"
              >
                Join Us
              </button>
            </Typography>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center "
          style={{ marginTop: "8rem" }}
        >
          <div>
            <img
              src={Frame}
              alt="img 2"
              className="img"
              width="100%"
              height="80%"
              // marginRight="4rem"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row" style={{ marginTop: "6rem" }}>
        <div className="col-lg-12 col-md-12 text-center" lg={12}>
          <div>
            <h1 style={{ fontFamily: "calibri" }}>
              <strong style={{ color: "black" }}> Video How</strong>
              <strong style={{ color: "#ed1c24" }}> App Work</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 " lg={12}>
          <div
            className="col d-flex justify-content-center align-items-center "
            style={{ marginTop: "2rem" }}
          >
            <img
              src={videoimg}
              alt="img 2"
              className="img "
              width="100%"
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
          marginTop: "8rem",
        }}
      >
        <div className="col-lg-12 col-md-12 text-center">
          <div
            style={{ color: "white", marginTop: "4rem", marginBottom: "4rem" }}
          >
            <h1 style={{ fontFamily: "calibri" }}>
              <b>Download the App</b>
            </h1>
            <br />
            <strong style={{ fontFamily: "calibri" }}>
              The Gate of Truth is a metaphysical structure which float in an
              endless white expanse, with two doors that
              <br />
              appear like a pair of giant stone tablets with a mural engraved on
              them.
            </strong>
            <br />
            <br />
            {/* <div className="justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                <img src="/path/to/image1.jpg" alt="Image 1" fluid />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                <img src="/path/to/image2.jpg" alt="Image 2" fluid />
              </div>

             
            </div> */}
            {/* <div
              className=" col-lg-12 "
              // style={{ backgroundColor: "GrayText" }}
            >
              <div className="col-lg-6" style={{ backgroundColor: "yellow" }}>
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
              </div>
              <div className="col-lg-6 " style={{ backgroundColor: "yellow" }}>
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
            </div> */}
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
