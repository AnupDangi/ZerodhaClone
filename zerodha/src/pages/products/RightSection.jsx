import React from "react";

export default function RightSection({
  title,
  description,
  LearnMore,
  ImageURL,
}) {
  return (
    <div className="container ">
      <div className="row p-5 ">
        <div className="col-5 mt-5 p-5">
          <div className="row mt-5">
          <h1 className="mt-5">{title}</h1>
          <p className="mt-3">{description}</p>
          </div>

          <a href="" style={{ textDecoration: "none" }}>
            {LearnMore} &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <img src={ImageURL} alt="console"/>
        </div>
      </div>
    </div>
  );
}
