import React from "react";

  
export default function Universe() {
  return (
    <div className="container mt-5">
  <div className="row text-center">
    <h1>The Zerodha Universe</h1>
    <p>
      Extend your trading and investment experience even further with our
      partner platforms
    </p>

    <div className="col-4">
      <img src="media/images/zerodhaFundhouse.png" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Our asset management venture that is creating simple and transparent
        index funds to help you save for your goals.
      </p>
    </div>
    <div className="col-4">
      <img src="media/images/sensibullLogo.svg" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Options trading platform that lets you create strategies, analyze
        positions, and examine data points like open interest, FII/DII, and
        more.
      </p>
    </div>
    <div className="col-4">
      <img src="media/images/tijori.svg" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Investment research platform that offers detailed insights on
        stocks, sectors, supply chains, and more.
      </p>
    </div>
    <div className="col-4">
      <img src="media/images/streakLogo.png" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Systematic trading platform that allows you to create and backtest
        strategies without coding.
      </p>
    </div>
    <div className="col-4">
      <img src="media/images/smallcaseLogo.png" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Thematic investing platform that helps you invest in diversified
        baskets of stocks on ETFs.
      </p>
    </div>
    <div className="col-4">
      <img src="media/images/dittoLogo.png" alt="" className="img-fluid uniform-img d-block mx-auto" />
      <p className="text-small text-muted">
        Personalized advice on life and health insurance. No spam and no
        mis-selling. Sign up for free
      </p>
    </div>

  <button className="btn btn-primary p-2 fs-5 mb-5 mt-5" style={{color:"white", width:"20%", margin:"0 auto"}}>Sign up for free</button>
  </div>
</div>

  );
}
