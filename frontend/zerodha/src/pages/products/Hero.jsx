import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h4 className="text-muted mt-3 ">Sleek,modern, and intuitive trading platforms</h4>
        <p className="mt-3">
          Check out our investment offerings.{" "}
          <a href="">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
