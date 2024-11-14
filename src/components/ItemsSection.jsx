import React from "react";
import { Fade } from "react-reveal";

export const ItemsSection = ({ items }) => {
  return (
    <div className="row clearfix d-flex justify-content-center mb-3 mt-5 section-scrolling">
      {items &&
        items.map((obj) => (
          <Fade>
            <div className="col-md-2">
              <div className="card rounded-0 p-1 border-0">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="text-primary text-center mt-3">
                      <span className={obj.icon}></span>
                    </h1>
                  </div>
                  <div className="col-md-6">
                    <h2 className="text-secondary text-center">
                      {obj.puntaje}
                    </h2>
                    <p className="text-secondary text-center">
                      {obj.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
    </div>
  );
};
