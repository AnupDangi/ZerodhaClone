import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 p-5">
          <img src={imageURL} alt="imageUrl" />
        </div>
        <div className="col-1" style={{marginLeft:"90px"}}></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{description}</p>
          <div className="mt-3 ">
            <a href={tryDemo} style={{textDecoration:"none"}}>
              Try Demo &nbsp; </a>
              <a href="#" >
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                &nbsp;
            </a>
            &nbsp;
            <a href={learnMore} style={{textDecoration:"none"}}>
              LearnMore
              <a href="#" >
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </a>
          </div>
          <div className="mt-3 p-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
