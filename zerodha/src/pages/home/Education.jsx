import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="media/images/education.svg" style={{width:"90%"}}/>
        </div>
        <div className="col-6 mt-5">
            <h1 className="fs-2">Free and open market eduation</h1>
            <p className="mt-3">
              Varsity, the largest online stock market education book in the
              world <br/>
               covering everything from the basics to advanced trading.
            </p>

              <Link to={"/education"} style={{ textDecoration: "none" }}>
                Varsity &nbsp;
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            <p className="mt-4">TradingQ&A, the most active trading and investment community in India for 
                <br/> all your market related queries.</p>
              <Link to={"/education"} style={{ textDecoration: "none" }}>
                TadingQ&A &nbsp;
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
          </div>
        </div>
      </div>
  );
}

export default Education;
