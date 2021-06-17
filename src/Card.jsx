import React from "react";

function Card(props) {
  return (
    <>
      {/* This is card start here*/}
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.Cimage} className="card-img-top" alt={props.Cimage} />
          <div className="card-body">
            <h5 className="card-title">{props.Ctitle}</h5>
            <p className="card-text">{props.Cdesc}</p>
            <a
              href="https://www.fiverr.com/codestargm?up_rollout=true"
              className="btn btn-primary"
            >
              Hire Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
