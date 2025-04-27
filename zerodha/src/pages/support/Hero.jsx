import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="p-5 mb-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#" style={{ textDecoration: "none", color: "white" }} className="fs-4">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 ">
        <div className="col-5 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input type="text" placeholder="Eg. how do I activate F&O" /><br />
          <a href="#">Track account opening</a> &nbsp;
          <a href="#">Track segment activation</a> &nbsp;
          <a href="#">Intraday margins</a> &nbsp;
          <a href="#">Kite user manual</a>
        </div>
        <div className="col"></div>
        <div className="col-6 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <a href="#" className="fs-4">1. Current Takeovers and Delisting- January 2024</a> <br />
            <a href="#" className="fs-4">2. Latest Intraday leverages - MIS & CO</a>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
