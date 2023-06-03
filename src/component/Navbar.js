import React, { useState } from "react";
import logo from "../GateofTruthImages/logo.svg";
import HomeBS from "./HomeBS";
import mission from "../GateofTruthImages/mission.svg";
import Frame from "../GateofTruthImages/Frame.svg";
import videoimg from "../GateofTruthImages/videoimg.svg";
import Artwork from "../GateofTruthImages/Artwork.svg";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  Toolbar,
  Typography,
} from "@mui/material";
import appmask from "../GateofTruthImages/appmask.svg";
import googlemask from "../GateofTruthImages/googlemask.svg";
import UserStories from "./UserStories";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import MenuIcon from "@mui/icons-material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            style={{
              backgroundColor: "#ed1c24",
              // height: "100px",
            }}
          >
            <Toolbar>
              <IconButton
                sx={{
                  display: {
                    lg: "none",
                    md: "block",
                    sm: "block",
                    xs: "block",
                  },
                }}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  // className="img float-right"
                  src={logo}
                  alt="img 2"
                  width="100%"
                  height={70}
                />
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ backgroundColor: "transparent" }}
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ color: "black" }}
                    >
                      HOME
                    </a>
                  </li>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: "black" }}>
                      ABOUT
                    </a>
                  </li>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: "black" }}>
                      GALLARY
                    </a>
                  </li>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: "black" }}>
                      BLOG
                    </a>
                  </li>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <li className="nav-item-light">
                    <a className="nav-link" href="#" style={{ color: "black" }}>
                      CONTACT
                    </a>
                  </li>
                </MenuItem>
              </Menu>
            </Toolbar>
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
            // marginTop: "-6rem",
            // marginTop: "6rem",
            // background: "linear-gradient(to top,#ffffff, #feeeee)",
            // marginBottom: "4rem",
          }
        }
      >
        <div
          className="col-lg-6 col-md-12  d-flex justify-content-center align-items-center"

          // style={{ backgroundColor: "red" }}
        >
          <div>
            <Typography style={{}}>
              <h1
                style={{
                  fontSize: "70px",
                  fontFamily: "Raleway",
                }}
              >
                {/* <b> */}
                Nothing Is More
                <br /> Important Then
                <span style={{ color: "#ed1c24" }}>
                  Truth <br />
                  In a World{" "}
                </span>
                That Lies
                {/* </b> */}
              </h1>
            </Typography>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 px-lg-6 "
          // style={{ marginTop: "6rem" }}
        >
          <div
            className="col"
            style={{
              // background: "lightgreen",
              // height: "100px",
              position: "relative",
              // width: "100%",
              // marginBottom: "-18rem",
              // marginTop: "-6rem",
              // marginBottom: "8rem",
            }}
          >
            <img
              src={Artwork}
              alt="img2"
              className="img mb-4 "
              width="100%"
              height="100%"
              // marginTop="-18rem"
              viewBox="0 0 500 500"
            />
          </div>
        </div>
      </div>
      <br />
      <div
        className="row"
        style={
          {
            // marginTop: "6rem"
          }
        }
      >
        <div
          style={
            {
              // backgroundColor: "yellow",
            }
          }
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
          style={
            {
              // marginTop: "8rem",
              // backgroundColor: "yellowgreen",
            }
          }
          lg={6}
        >
          <div>
            <Typography
              style={
                {
                  // marginLeft: "5rem",
                  // backgroundColor: "yellow",
                  // marginTop: "15rem",
                }
              }
            >
              <h1 style={{ fontFamily: "Raleway" }}>
                {/* <b> */} <span>Our</span>{" "}
                <span style={{ color: "#ed1c24", fontFamily: "Raleway" }}>
                  mission
                </span>
                {/* </b> */}
              </h1>
              <br />
              <span style={{ fontFamily: "Raleway" }}>
                We bring truth and transparency to a World filled woth lies. Use
                our app as your tool for knowledge and equip yourself with the
                information you need to make wise decision i any aspect of your
                life as relationships, business etc.
              </span>
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
                  fontFamily: "Raleway",
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
      <div
        className="row"
        style={
          {
            // marginTop: "6rem"
          }
        }
      >
        <div
          className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center "
          // style={{ backgroundColor: "yellow" }}
        >
          <div
            className="col d-flex justify-content-center align-items-center"
            // style={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              style={
                {
                  // backgroundColor: "yellow",
                  // marginLeft: "5rem",
                }
              }
            >
              {/* <div style={{ display: "flex", alignItems: "center" }}> */}
              <h1 style={{ fontFamily: "Raleway" }}>
                {/* <b> */}
                <span>
                  <span>How it </span>
                  <span style={{ color: "#ed1c24" }}>Work</span>
                </span>
              </h1>
              <br />

              <small style={{ fontFamily: "Raleway", fontSize: "15px" }}>
                We bring truth and transparency to a World filled woth lies. Use
                our app as tool for knowledge and equip yourself with the
                information you need to make wise decision i any aspect of your
                life as relationships, business etc.
              </small>
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
                  fontFamily: "Raleway",
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
            <h1 style={{ fontFamily: "Raleway" }}>
              <span style={{ color: "black" }}> Video How</span>
              <span style={{ color: "#ed1c24" }}> App Work</span>
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
            <h1 style={{ fontFamily: "Raleway" }}>Download the App</h1>
            <br />
            <span style={{ fontFamily: "Raleway" }}>
              The Gate of Truth is a metaphysical structure which float in an
              endless white expanse, with two doors that
              <br />
              appear like a pair of giant stone tablets with a mural engraved on
              them.
            </span>
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
      </div>
      <div> {<UserStories />}</div>
    </div>
  );
};

export default NavBar;
