import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="mt-5">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.HeadingOne}
                    <strong className="brand-name">{props.Strong}</strong>
                  </h1>
                  <h2 className="my-3">{props.HeadingTwo}</h2>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to={props.link}>
                      {props.BtnText}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.img}
                    className="img-fluid animated"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
