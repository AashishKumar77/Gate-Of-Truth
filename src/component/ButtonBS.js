import { Button, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
function ButTonBS() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 " xs={12} md={12}>
          <div>
            <Button
              className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0.5rem",
                width: "13rem",
                // height: "rem",
                // marginRight: "2rem",
                // marginBottom: "8rem",
              }}
              type="LOGIN"
            >
              <GoogleIcon fontSize="large" />
              <small>
                <b>Available on the</b>
              </small>{" "}
              <br />
              <strong>
                <b>Google Play</b>
              </strong>
            </Button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            {" "}
            <Button
              className="btn btn-outline-danger boderRadius-8 m-2 mt-2 my-2 my-sm-0"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0.5rem",
                width: "13rem",
                fontFamily: "Inter",
                fontSize: "normal",
                // height: "5rem",
                // marginRight: "2rem",
                // marginBottom: "8rem",
              }}
              type="LOGIN"
            >
              <AppleIcon fontSize="large" />
              <small>
                <b>Download on the</b>
              </small>{" "}
              <br />
              <strong>
                <b>App Store</b>
              </strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-lg-12">
    //       <div>
    //         <Button variant=" outlined danger">
    //           <GoogleIcon />
    //           <small>Available on the</small> <br />
    //           <strong>Google Play</strong>
    //         </Button>
    //         <Button
    //           className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
    //           style={{
    //             backgroundColor: "#ed1c24",
    //             color: "white",
    //             borderRadius: "0.5rem",
    //             width: "10rem",
    //             // marginRight: "2rem",
    //             // marginBottom: "8rem",
    //           }}
    //           type="LOGIN"
    //         >
    //           <GoogleIcon fontSize="large" />
    //           <small>Available on the</small> <br />
    //           <strong>Google Play</strong>
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="col-lg-6 col-md-12 ">
    //       <div
    //         className="col d-flex justify-content-center align-items-center"
    //         style={{ display: "flex", alignItems: "center" }}
    //       >
    //         <Typography
    //         // style={{
    //         //   // backgroundColor: "yellow",
    //         //   marginTop: "10rem",
    //         // }}
    //         >
    //           <div style={{ display: "flex", alignItems: "center" }}>
    //             <h1>
    //               <b>
    //                 <span>
    //                   <strong>How it</strong>
    //                   <strong style={{ color: "#ed1c24" }}>Work</strong>
    //                 </span>
    //                 <div
    //                   style={{
    //                     flex: "1",
    //                     borderTop: "1px solid #000",
    //                     marginLeft: "10px",
    //                     marginRight: "900px",
    //                   }}
    //                 ></div>
    //               </b>
    //             </h1>
    //           </div>
    //           <br />
    //           <br />
    //           {/* <strong> */}
    //           We bring truth and transparency to a World filled woth lies. Use
    //           our app as <br /> tool for knowledge and equip yourself with the
    //           information you need to make <br /> wise decision i any aspect of
    //           your life as relationships, business etc.
    //           {/* </strong> */}
    //           <br />
    //           <br />
    //           <br />
    //           <Button
    //             className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
    //             style={{
    //               backgroundColor: "#ed1c24",
    //               color: "white",
    //               borderRadius: "4rem",
    //               width: "9rem",
    //               marginRight: "2rem",
    //               // marginBottom: "8rem",
    //             }}
    //             type="LOGIN"
    //           >
    //             Join Us
    //           </button>
    //         </Typography>
    //       </div>
    //     </div>
    //   </div>
    //   <div style={{ display: "flex", alignItems: "center" }}>
    //     <span>
    //       <strong>How it</strong>{" "}
    //       <strong style={{ color: "#ed1c24" }}>Work</strong>
    //     </span>
    //     <div
    //       style={{
    //         flex: "1",
    //         borderTop: "1px solid #000",
    //         marginLeft: "10px",
    //         marginRight: "900px",
    //       }}
    //     ></div>
    //     {/* <strong>How it</strong>{" "}
    //     <strong style={{ color: "#ed1c24" }}>
    //       Work <strong style={{ marginTop: "8rem" }}>{""}</strong>
    //     </strong> */}
    //   </div>
    // </div>
  );
}
export default ButTonBS;
