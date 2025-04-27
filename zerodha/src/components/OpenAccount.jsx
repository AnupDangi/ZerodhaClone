import React from "react";
import { Link } from "react-router-dom";
export default function OpenAccount() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <h1 className="mb-3">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Link to={"/signup"}>
          <button
            className="btn btn-primary p-2 fs-5 mb-5"
            style={{ color: "white", width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}
