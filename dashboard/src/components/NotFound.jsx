import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <h1 className="mb-3">404, Not Found</h1>
        <p>Sorry,the page doesnot exist</p>

        <Link to={"/"}>
          <button
            className="btn btn-primary p-2 fs-5 mb-5"
            style={{ color: "white", width: "40%", margin: "0 auto" }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
