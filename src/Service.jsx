import React from "react";
import Card from "./Card";
import Data from "./Sdata";
function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row g-4">
              {Data.map((val, ind) => {
                return (
                  <Card
                    Cimage={val.Dimage}
                    Ctitle={val.Dtitle}
                    Cdesc={val.Ddesc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
