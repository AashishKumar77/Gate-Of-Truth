import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
function ButTonBS() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div>
            <Button variant=" outlined danger">
              <GoogleIcon />
              <small>Available on the</small> <br />
              <strong>Google Play</strong>
            </Button>
            <button
              className="btn btn-outline-danger boderRadius-8 mt-2 my-2 my-sm-0"
              style={{
                backgroundColor: "#ed1c24",
                color: "white",
                borderRadius: "0.5rem",
                width: "10rem",
                // marginRight: "2rem",
                // marginBottom: "8rem",
              }}
              type="LOGIN"
            >
              <GoogleIcon fontSize="large" />
              <small>Available on the</small> <br />
              <strong>Google Play</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ButTonBS;
